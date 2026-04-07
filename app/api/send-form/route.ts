import { NextResponse } from 'next/server'

// Логирование (опционально)
const logError = (message: string, data?: any) => {
  console.error(`[${new Date().toISOString()}] ${message}`, data || '')
}

// Форматирование телефона
function formatPhone(raw: string) {
  const d = raw.replace(/\D+/g, '')
  if (d === '') return ''
  if (d.length === 11 && d[0] === '8') return '+7' + d.substring(1)
  if (d.length === 11 && d[0] === '7') return '+7' + d.substring(1)
  if (d.length === 10) return '+7' + d
  return raw[0] === '+' ? '+' + d : '+7' + d
}

// Отправка в Telegram
async function sendToTelegram(name: string, phone: string, message: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    logError('Telegram credentials not configured')
    return { success: false, error: 'Telegram credentials missing' }
  }

  const telegramMessage = `📋 <b>Новая заявка с сайта</b>\n\n`
    + `👤 <b>Имя:</b> ${escapeHtml(name)}\n`
    + `📞 <b>Телефон:</b> ${escapeHtml(phone)}\n`
    + `${message ? `💬 <b>Сообщение:</b> ${escapeHtml(message)}\n\n` : ''}`
    + `🕐 <b>Время:</b> ${new Date().toLocaleString('ru-RU')}`

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'HTML'
      })
    })

    return { success: response.ok }
  } catch (error) {
    logError('Telegram error:', error)
    return { success: false, error: String(error) }
  }
}

// Отправка в AmoCRM
async function sendToAmoCRM(
  name: string,
  phone: string,
  message: string,
  fbp: string | null,
  fbc: string | null,
  fbclid: string | null,
  page_url: string | null,
  user_agent: string | null,
  client_ip: string | null
) {
  const subdomain = process.env.AMO_SUBDOMAIN
  const accessToken = process.env.AMO_ACCESS_TOKEN

  if (!subdomain || !accessToken) {
    logError('AmoCRM credentials not configured')
    return { success: false, error: 'AmoCRM credentials missing' }
  }

  const phoneFormatted = formatPhone(phone)
  const contactName = name || phoneFormatted

  try {
    // 1. Поиск или создание контакта
    let contactId = await findContact(subdomain, accessToken, phoneFormatted)
    
    if (!contactId) {
      contactId = await createContact(subdomain, accessToken, contactName, phoneFormatted)
      if (!contactId) {
        return { success: false, error: 'Failed to create contact' }
      }
    }

    // 2. Создание сделки
    const leadId = await createLead(
      subdomain, accessToken, contactName, phoneFormatted, message,
      fbp, fbc, fbclid, page_url, user_agent, client_ip
    )

    if (!leadId) {
      return { success: false, error: 'Failed to create lead' }
    }

    // 3. Привязка контакта к сделке
    await linkContactToLead(subdomain, accessToken, leadId, contactId)

    return { success: true, lead_id: leadId, contact_id: contactId }
  } catch (error) {
    logError('AmoCRM error:', error)
    return { success: false, error: String(error) }
  }
}

// Вспомогательные функции для AmoCRM
async function amoRequest(method: string, url: string, token: string, payload?: any) {
  const response = await fetch(url, {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: payload ? JSON.stringify(payload) : undefined
  })

  const data = await response.json()
  return { code: response.status, body: data }
}

async function findContact(subdomain: string, token: string, phone: string) {
  const query = encodeURIComponent(phone)
  const url = `https://${subdomain}.amocrm.ru/api/v4/contacts?query=${query}&limit=1`
  
  const { code, body } = await amoRequest('GET', url, token)
  
  if (code === 200 && body._embedded?.contacts?.[0]?.id) {
    return body._embedded.contacts[0].id
  }
  return null
}

async function createContact(subdomain: string, token: string, name: string, phone: string) {
  const payload = [{
    name: name.substring(0, 255),
    custom_fields_values: [{
      field_code: 'PHONE',
      values: [{ value: phone, enum_code: 'MOB' }]
    }]
  }]

  const url = `https://${subdomain}.amocrm.ru/api/v4/contacts`
  const { code, body } = await amoRequest('POST', url, token, payload)
  
  if (code === 200 || code === 201) {
    return body._embedded?.contacts?.[0]?.id || null
  }
  return null
}

async function createLead(
  subdomain: string, token: string, name: string, phone: string, message: string,
  fbp: string | null, fbc: string | null, fbclid: string | null,
  page_url: string | null, user_agent: string | null, client_ip: string | null
) {
  // Формируем описание сделки
  const description = [
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    message ? `Сообщение: ${message}` : '',
    '\n--- ДАННЫЕ ДЛЯ АНАЛИТИКИ ---',
    fbp ? `fbp: ${fbp}` : '',
    fbc ? `fbc: ${fbc}` : '',
    fbclid ? `fbclid: ${fbclid}` : '',
    page_url ? `Page URL: ${page_url}` : '',
    user_agent ? `User Agent: ${user_agent.substring(0, 200)}` : '',
    client_ip ? `Client IP: ${client_ip}` : '',
    `\nВремя заявки: ${new Date().toLocaleString('ru-RU')}`
  ].filter(Boolean).join('\n')

  const lead = {
    name: `Заявка с сайта — ${name || 'Клиент'}`.substring(0, 255),
    price: 0,
    _embedded: {
      tags: [
        { name: 'SITE_LEAD' },
        { name: 'NEW' }
      ]
    }
  }

  const url = `https://${subdomain}.amocrm.ru/api/v4/leads`
  const { code, body } = await amoRequest('POST', url, token, [lead])
  
  if (code === 200 || code === 201) {
    const leadId = body._embedded?.leads?.[0]?.id
    if (leadId) {
      // Добавляем примечание
      await addNoteToLead(subdomain, token, leadId, description)
    }
    return leadId
  }
  return null
}

async function addNoteToLead(subdomain: string, token: string, leadId: number, noteText: string) {
  const note = [{
    entity_id: leadId,
    note_type: 'common',
    text: noteText.substring(0, 1000)
  }]

  const url = `https://${subdomain}.amocrm.ru/api/v4/leads/notes`
  await amoRequest('POST', url, token, note)
}

async function linkContactToLead(subdomain: string, token: string, leadId: number, contactId: number) {
  const payload = [{
    to_entity_id: contactId,
    to_entity_type: 'contacts',
    metadata: { is_main: true }
  }]

  const url = `https://${subdomain}.amocrm.ru/api/v4/leads/${leadId}/link`
  const { code } = await amoRequest('POST', url, token, payload)
  
  return code === 200 || code === 201
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Валидация
    const errors = []
    if (!data.name) errors.push('Имя обязательно для заполнения')
    if (!data.phone) errors.push('Телефон обязателен для заполнения')
    
    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    // Отправка в Telegram
    const telegramResult = await sendToTelegram(data.name, data.phone, data.message || '')
    
    // Отправка в AmoCRM
    const amoResult = await sendToAmoCRM(
      data.name,
      data.phone,
      data.message || '',
      data.fbp || null,
      data.fbc || null,
      data.fbclid || null,
      data.page_url || null,
      data.user_agent || null,
      data.client_ip || null
    )

    return NextResponse.json({
      success: true,
      telegram: telegramResult,
      amocrm: amoResult
    })
    
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}