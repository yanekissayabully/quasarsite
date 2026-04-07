// import { NextResponse } from 'next/server'

// // Логирование
// const logError = (message: string, data?: any) => {
//   console.error(`[${new Date().toISOString()}] ${message}`, data || '')
// }

// // Форматирование телефона
// function formatPhone(raw: string) {
//   const d = raw.replace(/\D+/g, '')
//   if (d === '') return ''
//   if (d.length === 11 && d[0] === '8') return '+7' + d.substring(1)
//   if (d.length === 11 && d[0] === '7') return '+7' + d.substring(1)
//   if (d.length === 10) return '+7' + d
//   return raw[0] === '+' ? '+' + d : '+7' + d
// }

// // Отправка в Telegram
// async function sendToTelegram(name: string, phone: string, message: string, analytics: string) {
//   const botToken = process.env.TELEGRAM_BOT_TOKEN
//   const chatId = process.env.TELEGRAM_CHAT_ID

//   if (!botToken || !chatId) {
//     logError('Telegram credentials not configured')
//     return { success: false, error: 'Telegram credentials missing' }
//   }

//   const telegramMessage = `📋 <b>НОВАЯ ЗАЯВКА С САЙТА</b>\n\n` +
//     `━━━━━━━━━━━━━━━━━━━━\n\n` +
//     `👤 <b>Имя:</b> ${escapeHtml(name)}\n` +
//     `📞 <b>Телефон:</b> ${escapeHtml(phone)}\n` +
//     `${message ? `💬 <b>Сообщение:</b> ${escapeHtml(message)}\n` : ''}` +
//     `━━━━━━━━━━━━━━━━━━━━\n\n` +
//     `<b>📊 ДАННЫЕ ДЛЯ АНАЛИТИКИ:</b>\n` +
//     `${analytics}\n` +
//     `━━━━━━━━━━━━━━━━━━━━\n` +
//     `🕐 <b>Время:</b> ${new Date().toLocaleString('ru-RU')}`

//   try {
//     const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         chat_id: chatId,
//         text: telegramMessage,
//         parse_mode: 'HTML'
//       })
//     })

//     const result = await response.json()
//     if (!response.ok) {
//       logError('Telegram API error:', result)
//     }
//     return { success: response.ok }
//   } catch (error) {
//     logError('Telegram error:', error)
//     return { success: false, error: String(error) }
//   }
// }

// // Отправка в AmoCRM
// async function sendToAmoCRM(
//   name: string,
//   phone: string,
//   message: string,
//   fbp: string | null,
//   fbc: string | null,
//   fbclid: string | null,
//   page_url: string | null,
//   user_agent: string | null,
//   client_ip: string | null
// ) {
//   const subdomain = process.env.AMO_SUBDOMAIN
//   const accessToken = process.env.AMO_ACCESS_TOKEN
//   const clientId = process.env.AMO_CLIENT_ID
//   const clientSecret = process.env.AMO_CLIENT_SECRET
//   const redirectUri = process.env.AMO_REDIRECT_URI
//   let refreshToken = process.env.AMO_REFRESH_TOKEN

//   if (!subdomain || !accessToken) {
//     logError('AmoCRM credentials not configured')
//     return { success: false, error: 'AmoCRM credentials missing' }
//   }

//   const phoneFormatted = formatPhone(phone)
//   const contactName = name || phoneFormatted

//   // Формируем полный текст сделки с ВСЕМИ данными
//   const leadText = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📋 ЗАЯВКА С САЙТА
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 👤 КЛИЕНТ:
//    Имя: ${name}
//    Телефон: ${phoneFormatted}
//    ${message ? `Сообщение: ${message}` : ''}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📊 АНАЛИТИЧЕСКИЕ ДАННЫЕ:
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//    ${fbp ? `✓ fbp: ${fbp}` : '✗ fbp: не передан'}
//    ${fbc ? `✓ fbc: ${fbc}` : '✗ fbc: не передан'}
//    ${fbclid ? `✓ fbclid: ${fbclid}` : '✗ fbclid: не передан'}
   
//    🌐 PAGE_URL: ${page_url || 'не передан'}
//    💻 USER_AGENT: ${user_agent ? user_agent.substring(0, 200) : 'не передан'}
//    📍 CLIENT_IP: ${client_ip || 'не определен'}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ⏰ Время заявки: ${new Date().toLocaleString('ru-RU')}
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`

//   try {
//     // Функция для запросов с обновлением токена
//     const amoRequest = async (method: string, url: string, payload?: any, retry = true) => {
//       const response = await fetch(url, {
//         method,
//         headers: {
//           'Authorization': `Bearer ${accessToken}`,
//           'Content-Type': 'application/json'
//         },
//         body: payload ? JSON.stringify(payload) : undefined
//       })

//       if (response.status === 401 && retry && refreshToken) {
//         // Обновляем токен
//         const newToken = await refreshAccessToken(subdomain, clientId!, clientSecret!, redirectUri!, refreshToken)
//         if (newToken) {
//           // Повторяем запрос с новым токеном
//           const retryResponse = await fetch(url, {
//             method,
//             headers: {
//               'Authorization': `Bearer ${newToken}`,
//               'Content-Type': 'application/json'
//             },
//             body: payload ? JSON.stringify(payload) : undefined
//           })
//           const retryData = await retryResponse.json()
//           return { code: retryResponse.status, body: retryData }
//         }
//       }

//       const data = await response.json()
//       return { code: response.status, body: data }
//     }

//     // 1. Поиск или создание контакта
//     let contactId = await findContact(subdomain, accessToken, phoneFormatted, amoRequest)
    
//     if (!contactId) {
//       contactId = await createContact(subdomain, accessToken, contactName, phoneFormatted, amoRequest)
//       if (!contactId) {
//         return { success: false, error: 'Failed to create contact' }
//       }
//     }

//     // 2. Создание сделки с ПОЛНЫМ текстом в названии и примечании
//     const leadName = `📋 ${name || 'Клиент'} — ${phoneFormatted}`
    
//     const lead = {
//       name: leadName.substring(0, 255),
//       price: 0,
//       _embedded: {
//         tags: [
//           { name: 'SITE_LEAD' },
//           { name: 'НОВАЯ' },
//           { name: 'САЙТ' }
//         ]
//       }
//     }

//     const url = `https://${subdomain}.amocrm.ru/api/v4/leads`
//     const { code, body } = await amoRequest('POST', url, [lead])
    
//     let leadId = null
//     if (code === 200 || code === 201) {
//       leadId = body._embedded?.leads?.[0]?.id
      
//       if (leadId) {
//         // Добавляем ПРИМЕЧАНИЕ со всеми данными (это точно отобразится)
//         await addNoteToLead(subdomain, accessToken, leadId, leadText, amoRequest)
        
//         // Добавляем текстовое поле в сделку (если есть кастомные поля)
//         await addCustomFieldsToLead(subdomain, accessToken, leadId, {
//           message: message || '',
//           fbp: fbp || '',
//           fbc: fbc || '',
//           fbclid: fbclid || '',
//           page_url: page_url || '',
//           user_agent: user_agent || '',
//           client_ip: client_ip || ''
//         }, amoRequest)
//       }
//     }

//     if (!leadId) {
//       return { success: false, error: 'Failed to create lead', response: body }
//     }

//     // 3. Привязка контакта к сделке
//     await linkContactToLead(subdomain, accessToken, leadId, contactId, amoRequest)

//     return { success: true, lead_id: leadId, contact_id: contactId }
//   } catch (error) {
//     logError('AmoCRM error:', error)
//     return { success: false, error: String(error) }
//   }
// }

// // Обновление токена
// async function refreshAccessToken(subdomain: string, clientId: string, clientSecret: string, redirectUri: string, refreshToken: string) {
//   try {
//     const response = await fetch(`https://${subdomain}.amocrm.ru/oauth2/access_token`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         client_id: clientId,
//         client_secret: clientSecret,
//         grant_type: 'refresh_token',
//         refresh_token: refreshToken,
//         redirect_uri: redirectUri
//       })
//     })
    
//     const data = await response.json()
//     if (data.access_token) {
//       // В реальном проекте нужно сохранить новый токен
//       return data.access_token
//     }
//     return null
//   } catch (error) {
//     logError('Token refresh error:', error)
//     return null
//   }
// }

// // Поиск контакта
// async function findContact(subdomain: string, token: string, phone: string, requestFn: Function) {
//   const query = encodeURIComponent(phone)
//   const url = `https://${subdomain}.amocrm.ru/api/v4/contacts?query=${query}&limit=1`
  
//   const { code, body } = await requestFn('GET', url)
  
//   if (code === 200 && body._embedded?.contacts?.[0]?.id) {
//     return body._embedded.contacts[0].id
//   }
//   return null
// }

// // Создание контакта
// async function createContact(subdomain: string, token: string, name: string, phone: string, requestFn: Function) {
//   const payload = [{
//     name: name.substring(0, 255),
//     custom_fields_values: [{
//       field_code: 'PHONE',
//       values: [{ value: phone, enum_code: 'MOB' }]
//     }]
//   }]

//   const url = `https://${subdomain}.amocrm.ru/api/v4/contacts`
//   const { code, body } = await requestFn('POST', url, payload)
  
//   if (code === 200 || code === 201) {
//     return body._embedded?.contacts?.[0]?.id || null
//   }
//   return null
// }

// // Добавление примечания к сделке
// async function addNoteToLead(subdomain: string, token: string, leadId: number, noteText: string, requestFn: Function) {
//   const note = [{
//     entity_id: leadId,
//     note_type: 'common',
//     text: noteText
//   }]

//   const url = `https://${subdomain}.amocrm.ru/api/v4/leads/notes`
//   const { code, body } = await requestFn('POST', url, note)
  
//   if (code === 200 || code === 201) {
//     logError('✅ Примечание добавлено к сделке', { leadId })
//     return true
//   } else {
//     logError('❌ Ошибка добавления примечания', { code, body })
//     return false
//   }
// }

// // Добавление кастомных полей
// async function addCustomFieldsToLead(subdomain: string, token: string, leadId: number, fields: any, requestFn: Function) {
//   const customFields = []
  
//   // ID полей - замени на свои из AmoCRM
//   const fieldIds = {
//     message: 914273,
//     fbp: 914275,
//     fbc: 914277,
//     fbclid: 914279,
//     page_url: 914281,
//     user_agent: 914283,
//     client_ip: 914285
//   }
  
//   for (const [key, value] of Object.entries(fields)) {
//     if (value && value !== 'null' && value !== 'undefined') {
//       const fieldId = fieldIds[key as keyof typeof fieldIds]
//       if (fieldId) {
//         customFields.push({
//           field_id: fieldId,
//           values: [{ value: String(value).substring(0, 255) }]
//         })
//       }
//     }
//   }
  
//   if (customFields.length === 0) return
  
//   const payload = {
//     custom_fields_values: customFields
//   }
  
//   const url = `https://${subdomain}.amocrm.ru/api/v4/leads/${leadId}`
//   const { code, body } = await requestFn('PATCH', url, payload)
  
//   if (code === 200 || code === 201) {
//     logError('✅ Кастомные поля добавлены', { fields: customFields.length })
//   } else {
//     logError('⚠️ Ошибка добавления кастомных полей', { code, body })
//   }
// }

// // Привязка контакта к сделке
// async function linkContactToLead(subdomain: string, token: string, leadId: number, contactId: number, requestFn: Function) {
//   const payload = [{
//     to_entity_id: contactId,
//     to_entity_type: 'contacts',
//     metadata: { is_main: true }
//   }]

//   const url = `https://${subdomain}.amocrm.ru/api/v4/leads/${leadId}/link`
//   const { code } = await requestFn('POST', url, payload)
  
//   return code === 200 || code === 201
// }

// function escapeHtml(text: string): string {
//   return text
//     .replace(/&/g, '&amp;')
//     .replace(/</g, '&lt;')
//     .replace(/>/g, '&gt;')
//     .replace(/"/g, '&quot;')
//     .replace(/'/g, '&#39;')
// }

// // ============ ОСНОВНОЙ ОБРАБОТЧИК ============
// export async function POST(request: Request) {
//   try {
//     const data = await request.json()
    
//     console.log('📥 Получены данные:', data)
    
//     // Валидация
//     const errors = []
//     if (!data.name) errors.push('Имя обязательно для заполнения')
//     if (!data.phone) errors.push('Телефон обязателен для заполнения')
    
//     if (errors.length > 0) {
//       return NextResponse.json({ success: false, errors }, { status: 400 })
//     }

//     // Формируем аналитическую строку для Telegram
//     const analyticsText = [
//       `fbp: ${data.fbp || 'не передан'}`,
//       `fbc: ${data.fbc || 'не передан'}`,
//       `fbclid: ${data.fbclid || 'не передан'}`,
//       `Page URL: ${data.page_url || 'не передан'}`,
//       `User Agent: ${data.user_agent ? data.user_agent.substring(0, 100) : 'не передан'}`,
//       `Client IP: ${data.client_ip || 'не определен'}`
//     ].join('\n')

//     // Отправка в Telegram
//     const telegramResult = await sendToTelegram(data.name, data.phone, data.message || '', analyticsText)
    
//     // Отправка в AmoCRM
//     const amoResult = await sendToAmoCRM(
//       data.name,
//       data.phone,
//       data.message || '',
//       data.fbp || null,
//       data.fbc || null,
//       data.fbclid || null,
//       data.page_url || null,
//       data.user_agent || null,
//       data.client_ip || null
//     )

//     console.log('📤 Результат:', { telegramResult, amoResult })

//     return NextResponse.json({
//       success: true,
//       telegram: telegramResult,
//       amocrm: amoResult
//     })
    
//   } catch (error) {
//     console.error('❌ API Error:', error)
//     return NextResponse.json(
//       { success: false, error: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }



import { NextResponse } from 'next/server'

// Логирование
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
async function sendToTelegram(name: string, phone: string, message: string, analytics: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    logError('Telegram credentials not configured')
    return { success: false, error: 'Telegram credentials missing' }
  }

  const telegramMessage = `📋 <b>НОВАЯ ЗАЯВКА С САЙТА</b>\n\n` +
    `━━━━━━━━━━━━━━━━━━━━\n\n` +
    `👤 <b>Имя:</b> ${escapeHtml(name)}\n` +
    `📞 <b>Телефон:</b> ${escapeHtml(phone)}\n` +
    `${message ? `💬 <b>Сообщение:</b> ${escapeHtml(message)}\n` : ''}` +
    `━━━━━━━━━━━━━━━━━━━━\n\n` +
    `<b>📊 ДАННЫЕ ДЛЯ АНАЛИТИКИ:</b>\n` +
    `${analytics}\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `🕐 <b>Время:</b> ${new Date().toLocaleString('ru-RU')}`

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

    const result = await response.json()
    if (!response.ok) {
      logError('Telegram API error:', result)
    }
    return { success: response.ok }
  } catch (error) {
    logError('Telegram error:', error)
    return { success: false, error: String(error) }
  }
}

// Безопасный запрос к AmoCRM
async function safeAmoRequest(url: string, options: any) {
  try {
    console.log(`🌐 Making ${options.method} request to:`, url)
    const response = await fetch(url, options)
    const text = await response.text()
    
    console.log(`📡 Response status: ${response.status}`)
    if (text && text.trim()) {
      console.log(`📡 Response body preview:`, text.substring(0, 500))
    }
    
    // Пытаемся парсить JSON только если есть что парсить
    let data = null
    if (text && text.trim()) {
      try {
        data = JSON.parse(text)
      } catch (e) {
        console.warn('Non-JSON response:', text.substring(0, 200))
      }
    }
    
    return {
      status: response.status,
      ok: response.ok,
      data
    }
  } catch (error) {
    console.error('Request failed:', error)
    return {
      status: 500,
      ok: false,
      data: null,
      error: String(error)
    }
  }
}

// Обновление токена
let currentAccessToken = process.env.AMO_ACCESS_TOKEN
let currentRefreshToken = process.env.AMO_REFRESH_TOKEN

async function refreshAccessToken(subdomain: string, clientId: string, clientSecret: string, redirectUri: string) {
  if (!currentRefreshToken) {
    logError('No refresh token available')
    return null
  }
  
  try {
    console.log('🔄 Refreshing access token...')
    const response = await fetch(`https://${subdomain}.amocrm.ru/oauth2/access_token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'refresh_token',
        refresh_token: currentRefreshToken,
        redirect_uri: redirectUri
      })
    })
    
    const data = await response.json()
    if (data.access_token) {
      currentAccessToken = data.access_token
      if (data.refresh_token) {
        currentRefreshToken = data.refresh_token
      }
      console.log('✅ Token refreshed successfully')
      return data.access_token
    }
    logError('Token refresh failed:', data)
    return null
  } catch (error) {
    logError('Token refresh error:', error)
    return null
  }
}

// Поиск контакта
async function findContact(subdomain: string, token: string, phone: string) {
  const query = encodeURIComponent(phone)
  const url = `https://${subdomain}.amocrm.ru/api/v4/contacts?query=${query}&limit=1`
  
  const result = await safeAmoRequest(url, {
    method: 'GET',
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  
  // Проверяем статус 200 и наличие контакта
  if (result.status === 200 && result.data?._embedded?.contacts?.[0]?.id) {
    return { success: true, contactId: result.data._embedded.contacts[0].id, result }
  }
  
  // Статус 204 означает "No Content" - контакт не найден
  if (result.status === 204) {
    return { success: false, contactId: null, result, notFound: true }
  }
  
  return { success: false, contactId: null, result }
}

// Создание контакта
async function createContact(subdomain: string, token: string, name: string, phone: string) {
  const payload = [{
    name: name.substring(0, 255),
    custom_fields_values: [{
      field_code: 'PHONE',
      values: [{ value: phone, enum_code: 'WORK' }]
    }]
  }]

  console.log('📝 Creating contact with payload:', JSON.stringify(payload, null, 2))

  const url = `https://${subdomain}.amocrm.ru/api/v4/contacts`
  const result = await safeAmoRequest(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  
  console.log('📝 Create contact result:', { 
    status: result.status, 
    hasData: !!result.data 
  })
  
  // Правильно извлекаем ID из ответа AmoCRM
  if (result.status === 200 || result.status === 201) {
    // Проверяем структуру ответа
    if (result.data?._embedded?.contacts?.[0]?.id) {
      const contactId = result.data._embedded.contacts[0].id
      console.log('✅ Contact created with ID:', contactId)
      return { success: true, contactId, result }
    }
    
    // Если получили успешный ответ, но не можем найти ID
    console.error('❌ Cannot extract contact ID from response:', JSON.stringify(result.data, null, 2))
    return { success: false, contactId: null, result, error: 'Cannot extract contact ID from response' }
  }
  
  // Выводим подробную ошибку
  if (result.data) {
    console.error('❌ Error creating contact:', JSON.stringify(result.data, null, 2))
  }
  
  return { success: false, contactId: null, result }
}

// Добавление примечания к сделке
async function addNoteToLead(subdomain: string, token: string, leadId: number, noteText: string) {
  const note = [{
    entity_id: leadId,
    note_type: 'common',
    text: noteText
  }]

  const url = `https://${subdomain}.amocrm.ru/api/v4/leads/notes`
  const result = await safeAmoRequest(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  
  if (result.ok) {
    console.log('✅ Примечание добавлено к сделке', { leadId })
    return true
  } else {
    logError('❌ Ошибка добавления примечания', { status: result.status, data: result.data })
    return false
  }
}

// Добавление кастомных полей
async function addCustomFieldsToLead(subdomain: string, token: string, leadId: number, fields: any) {
  const customFields = []
  
  // ID полей - замени на свои из AmoCRM
  const fieldIds = {
    message: 914273,
    fbp: 914275,
    fbc: 914277,
    fbclid: 914279,
    page_url: 914281,
    user_agent: 914283,
    client_ip: 914285
  }
  
  for (const [key, value] of Object.entries(fields)) {
    if (value && value !== 'null' && value !== 'undefined' && String(value).trim()) {
      const fieldId = fieldIds[key as keyof typeof fieldIds]
      if (fieldId) {
        customFields.push({
          field_id: fieldId,
          values: [{ value: String(value).substring(0, 255) }]
        })
      }
    }
  }
  
  if (customFields.length === 0) return true
  
  const payload = {
    custom_fields_values: customFields
  }
  
  const url = `https://${subdomain}.amocrm.ru/api/v4/leads/${leadId}`
  const result = await safeAmoRequest(url, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  
  if (result.ok) {
    console.log('✅ Кастомные поля добавлены', { fields: customFields.length })
    return true
  } else {
    logError('⚠️ Ошибка добавления кастомных полей', { status: result.status, data: result.data })
    return false
  }
}

// Привязка контакта к сделке
async function linkContactToLead(subdomain: string, token: string, leadId: number, contactId: number) {
  const payload = [{
    to_entity_id: contactId,
    to_entity_type: 'contacts',
    metadata: { is_main: true }
  }]

  const url = `https://${subdomain}.amocrm.ru/api/v4/leads/${leadId}/link`
  const result = await safeAmoRequest(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  
  return result.ok
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
  const clientId = process.env.AMO_CLIENT_ID
  const clientSecret = process.env.AMO_CLIENT_SECRET
  const redirectUri = process.env.AMO_REDIRECT_URI

  if (!subdomain || !currentAccessToken) {
    logError('AmoCRM credentials not configured')
    return { success: false, error: 'AmoCRM credentials missing' }
  }

  console.log('🔑 Using token:', currentAccessToken.substring(0, 20) + '...')
  console.log('🏢 Subdomain:', subdomain)

  const phoneFormatted = formatPhone(phone)
  const contactName = name || phoneFormatted

  console.log('📞 Formatted phone:', phoneFormatted)
  console.log('👤 Contact name:', contactName)

  // Формируем полный текст сделки с ВСЕМИ данными
  const leadText = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 ЗАЯВКА С САЙТА
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 КЛИЕНТ:
   Имя: ${name}
   Телефон: ${phoneFormatted}
   ${message ? `Сообщение: ${message}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 АНАЛИТИЧЕСКИЕ ДАННЫЕ:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   ${fbp ? `✓ fbp: ${fbp}` : '✗ fbp: не передан'}
   ${fbc ? `✓ fbc: ${fbc}` : '✗ fbc: не передан'}
   ${fbclid ? `✓ fbclid: ${fbclid}` : '✗ fbclid: не передан'}
   
   🌐 PAGE_URL: ${page_url || 'не передан'}
   💻 USER_AGENT: ${user_agent ? user_agent.substring(0, 200) : 'не передан'}
   📍 CLIENT_IP: ${client_ip || 'не определен'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ Время заявки: ${new Date().toLocaleString('ru-RU')}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`

  try {
    // Функция для выполнения запросов с автоматическим обновлением токена
    const executeRequest = async <T>(
      requestFn: () => Promise<{ success: boolean; contactId?: number; result?: any; data?: T }>
    ): Promise<{ success: boolean; contactId?: number; result?: any; data?: T }> => {
      let response = await requestFn()
      
      // Если получили 401 и есть refresh token, пробуем обновить
      if (!response.success && response.result?.status === 401 && currentRefreshToken && clientId && clientSecret && redirectUri) {
        console.log('🔄 Token expired, refreshing...')
        const newToken = await refreshAccessToken(subdomain, clientId, clientSecret, redirectUri)
        
        if (newToken) {
          // Повторяем запрос с новым токеном
          response = await requestFn()
        }
      }
      
      return response
    }

    // 1. Поиск или создание контакта
    let contactId = null
    
    console.log('🔍 Searching for contact...')
    const findContactResult = await executeRequest(() => findContact(subdomain, currentAccessToken!, phoneFormatted))
    
    if (findContactResult.success && findContactResult.contactId) {
      contactId = findContactResult.contactId
      console.log('✅ Contact found with ID:', contactId)
    } else {
      console.log('❌ Contact not found, creating new one...')
    }
    
    if (!contactId) {
      const createContactResult = await executeRequest(() => createContact(subdomain, currentAccessToken!, contactName, phoneFormatted))
      
      // ИСПРАВЛЕНО: проверяем success и берем contactId напрямую
      if (createContactResult.success && createContactResult.contactId) {
        contactId = createContactResult.contactId
        console.log('✅ Contact created with ID:', contactId)
      }
      
      if (!contactId) {
        console.error('❌ Failed to create contact, check logs above')
        return { success: false, error: 'Failed to create contact' }
      }
    }

    console.log('✅ Contact ready:', contactId)

    // 2. Создание сделки
    const leadName = `📋 ${name || 'Клиент'} — ${phoneFormatted}`
    
    const lead = {
      name: leadName.substring(0, 255),
      price: 0,
      _embedded: {
        tags: [
          { name: 'SITE_LEAD' },
          { name: 'НОВАЯ' },
          { name: 'САЙТ' }
        ]
      }
    }

    console.log('📝 Creating lead...')
    const createLead = async () => {
      const url = `https://${subdomain}.amocrm.ru/api/v4/leads`
      const result = await safeAmoRequest(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${currentAccessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([lead])
      })
      return { success: result.ok, data: result.data, result }
    }

    const leadResult = await executeRequest(createLead)
    
    let leadId = null
    if (leadResult.success && leadResult.data?._embedded?.leads?.[0]?.id) {
      leadId = leadResult.data._embedded.leads[0].id
      console.log('✅ Lead created:', leadId)
      
      if (leadId) {
        // Добавляем примечание
        await addNoteToLead(subdomain, currentAccessToken!, leadId, leadText)
        
        // Добавляем кастомные поля
        await addCustomFieldsToLead(subdomain, currentAccessToken!, leadId, {
          message: message || '',
          fbp: fbp || '',
          fbc: fbc || '',
          fbclid: fbclid || '',
          page_url: page_url || '',
          user_agent: user_agent || '',
          client_ip: client_ip || ''
        })
      }
    }

    if (!leadId) {
      logError('Failed to create lead', leadResult)
      return { success: false, error: 'Failed to create lead', response: leadResult.data }
    }

    // 3. Привязка контакта к сделке
    await linkContactToLead(subdomain, currentAccessToken!, leadId, contactId)

    return { success: true, lead_id: leadId, contact_id: contactId }
  } catch (error) {
    logError('AmoCRM error:', error)
    return { success: false, error: String(error) }
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// ============ ОСНОВНОЙ ОБРАБОТЧИК ============
export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    console.log('📥 Получены данные:', data)
    
    // Валидация
    const errors = []
    if (!data.name) errors.push('Имя обязательно для заполнения')
    if (!data.phone) errors.push('Телефон обязателен для заполнения')
    
    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    // Формируем аналитическую строку для Telegram
    const analyticsText = [
      `fbp: ${data.fbp || 'не передан'}`,
      `fbc: ${data.fbc || 'не передан'}`,
      `fbclid: ${data.fbclid || 'не передан'}`,
      `Page URL: ${data.page_url || 'не передан'}`,
      `User Agent: ${data.user_agent ? data.user_agent.substring(0, 100) : 'не передан'}`,
      `Client IP: ${data.client_ip || 'не определен'}`
    ].join('\n')

    // Отправка в Telegram
    const telegramResult = await sendToTelegram(data.name, data.phone, data.message || '', analyticsText)
    
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

    console.log('📤 Результат:', { telegramResult, amoResult })

    return NextResponse.json({
      success: true,
      telegram: telegramResult,
      amocrm: amoResult
    })
    
  } catch (error) {
    console.error('❌ API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}