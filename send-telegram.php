<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

// Загрузка .env файла
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Логирование
$logFile = 'form_debug.log';

function writeLog($message, $data = null) {
    global $logFile;
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[{$timestamp}] " . $message;
    if ($data !== null) {
        $logEntry .= " - " . json_encode($data, JSON_UNESCAPED_UNICODE);
    }
    $logEntry .= PHP_EOL;
    file_put_contents($logFile, $logEntry, FILE_APPEND);
}

writeLog("========== НОВЫЙ ЗАПРОС ==========");

// Получаем данные из POST запроса
$input = file_get_contents('php://input');
$data = json_decode($input, true);
writeLog("Получены данные от формы", $data);

// Извлекаем основные данные из формы
$name = $data['name'] ?? '';
$phone = $data['phone'] ?? '';
$message = $data['message'] ?? '';

// Извлекаем Facebook данные и другие параметры
$fbp = $data['fbp'] ?? null;
$fbc = $data['fbc'] ?? null;
$fbclid = $data['fbclid'] ?? null;
$page_url = $data['page_url'] ?? null;
$user_agent = $data['user_agent'] ?? $_SERVER['HTTP_USER_AGENT'] ?? null;
$client_ip = $data['client_ip'] ?? $_SERVER['REMOTE_ADDR'] ?? null;

// Валидация
$errors = [];
if (empty($name)) {
    $errors[] = 'Имя обязательно для заполнения';
}
if (empty($phone)) {
    $errors[] = 'Телефон обязателен для заполнения';
}

if (!empty($errors)) {
    writeLog("Ошибки валидации", $errors);
    echo json_encode([
        'success' => false,
        'errors' => $errors
    ], JSON_UNESCAPED_UNICODE);
    exit();
}

// Форматирование телефона
function formatPhone($raw) {
    $d = preg_replace('/\D+/', '', (string)$raw);
    if ($d === '') return '';
    if (strlen($d) === 11 && $d[0] === '8') return '+7' . substr($d, 1);
    if (strlen($d) === 11 && $d[0] === '7') return '+7' . substr($d, 1);
    if (strlen($d) === 10) return '+7' . $d;
    return ($raw[0] === '+') ? '+' . $d : '+7' . $d;
}

$phoneFormatted = formatPhone($phone);

// ========== ОТПРАВКА В TELEGRAM ==========
function sendToTelegram($name, $phone, $message) {
    $botToken = $_ENV['TELEGRAM_BOT_TOKEN'] ?? '';
    $chatId = $_ENV['TELEGRAM_CHAT_ID'] ?? '';
    
    if (empty($botToken) || empty($chatId)) {
        writeLog("Telegram credentials not configured");
        return ['success' => false, 'error' => 'Telegram credentials missing'];
    }
    
    $telegramMessage = "📋 <b>Новая заявка с сайта</b>\n\n";
    $telegramMessage .= "👤 <b>Имя:</b> " . htmlspecialchars($name) . "\n";
    $telegramMessage .= "📞 <b>Телефон:</b> " . htmlspecialchars($phone) . "\n";
    
    if (!empty($message)) {
        $telegramMessage .= "💬 <b>Сообщение:</b> " . htmlspecialchars($message) . "\n\n";
    }
    
    $telegramMessage .= "🕐 <b>Время:</b> " . date('d.m.Y H:i:s');
    
    $url = "https://api.telegram.org/bot{$botToken}/sendMessage";
    $payload = [
        'chat_id' => $chatId,
        'text' => $telegramMessage,
        'parse_mode' => 'HTML'
    ];
    
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    
    if ($httpCode === 200) {
        writeLog("✅ Telegram: сообщение отправлено");
        return ['success' => true];
    } else {
        writeLog("❌ Telegram ошибка: HTTP {$httpCode}, Error: {$error}");
        return ['success' => false, 'error' => $error];
    }
}

// ========== ФУНКЦИИ ДЛЯ РАБОТЫ С AMOCRM ==========
function amo_url($sub, $path) {
    return "https://{$sub}.amocrm.ru{$path}";
}

function amo_request($method, $url, $token, $payload = null) {
    $ch = curl_init();
    $headers = [
        "Authorization: Bearer {$token}",
        "Content-Type: application/json"
    ];
    
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_TIMEOUT => 20,
        CURLOPT_SSL_VERIFYPEER => false
    ]);
    
    if ($payload !== null) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload, JSON_UNESCAPED_UNICODE));
    }
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    
    return [$httpCode, $response, $error];
}

function refreshToken(&$access, &$refresh, $sub, $cid, $secret, $redir) {
    $url = amo_url($sub, "/oauth2/access_token");
    $payload = [
        "client_id" => $cid,
        "client_secret" => $secret,
        "grant_type" => "refresh_token",
        "refresh_token" => $refresh,
        "redirect_uri" => $redir
    ];
    
    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => ["Content-Type: application/json"],
        CURLOPT_POSTFIELDS => json_encode($payload),
        CURLOPT_TIMEOUT => 20
    ]);
    
    $response = curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($code === 200) {
        $data = json_decode($response, true);
        $access = $data['access_token'];
        if (!empty($data['refresh_token'])) {
            $refresh = $data['refresh_token'];
        }
        return true;
    }
    return false;
}

function findContact($subdomain, $token, $phone, $clientId, $clientSecret, $redirectUri, $refreshToken) {
    $query = urlencode($phone);
    $url = amo_url($subdomain, "/api/v4/contacts?query={$query}&limit=1");
    
    list($code, $body, $err) = amo_request('GET', $url, $token);
    
    if ($code === 401) {
        if (refreshToken($token, $refreshToken, $subdomain, $clientId, $clientSecret, $redirectUri)) {
            list($code, $body, $err) = amo_request('GET', $url, $token);
        }
    }
    
    if ($code >= 200 && $code < 300) {
        $data = json_decode($body, true);
        if (!empty($data['_embedded']['contacts'][0]['id'])) {
            return $data['_embedded']['contacts'][0]['id'];
        }
    }
    return null;
}

function createContact($subdomain, $token, $name, $phone, $clientId, $clientSecret, $redirectUri, $refreshToken) {
    if (strlen($name) > 255) $name = substr($name, 0, 255);
    
    $payload = [[
        "name" => $name,
        "custom_fields_values" => [[
            "field_code" => "PHONE",
            "values" => [[
                "value" => $phone,
                "enum_code" => "MOB"
            ]]
        ]]
    ]];
    
    $url = amo_url($subdomain, "/api/v4/contacts");
    list($code, $body, $err) = amo_request('POST', $url, $token, $payload);
    
    if ($code === 401) {
        if (refreshToken($token, $refreshToken, $subdomain, $clientId, $clientSecret, $redirectUri)) {
            list($code, $body, $err) = amo_request('POST', $url, $token, $payload);
        }
    }
    
    if ($code >= 200 && $code < 300) {
        $data = json_decode($body, true);
        return $data['_embedded']['contacts'][0]['id'] ?? null;
    }
    return null;
}

function createLead($subdomain, $token, $name, $phone, $message, $fbp, $fbc, $fbclid, $page_url, $user_agent, $client_ip, $clientId, $clientSecret, $redirectUri, $refreshToken) {
    writeLog("createLead: создаём сделку для {$name}");
    
    // Формируем описание сделки со всеми данными
    $leadDescription = "Имя: {$name}\n";
    $leadDescription .= "Телефон: {$phone}\n";
    if (!empty($message)) {
        $leadDescription .= "Сообщение: {$message}\n";
    }
    $leadDescription .= "\n--- ДАННЫЕ ДЛЯ АНАЛИТИКИ ---\n";
    if (!empty($fbp)) $leadDescription .= "fbp: {$fbp}\n";
    if (!empty($fbc)) $leadDescription .= "fbc: {$fbc}\n";
    if (!empty($fbclid)) $leadDescription .= "fbclid: {$fbclid}\n";
    if (!empty($page_url)) $leadDescription .= "Page URL: {$page_url}\n";
    if (!empty($user_agent)) $leadDescription .= "User Agent: {$user_agent}\n";
    if (!empty($client_ip)) $leadDescription .= "Client IP: {$client_ip}\n";
    $leadDescription .= "\nВремя заявки: " . date('d.m.Y H:i:s');
    
    // Обрезаем описание, если слишком длинное (макс 1000 символов для поля textarea)
    if (strlen($leadDescription) > 1000) {
        $leadDescription = substr($leadDescription, 0, 997) . '...';
    }
    
    $lead = [
        "name" => "Заявка с сайта — " . ($name ?: 'Клиент'),
        "price" => 0,
        "_embedded" => [
            "tags" => [
                ["name" => "SITE_LEAD"],
                ["name" => "NEW"]
            ]
        ]
    ];
    
    // Добавляем текстовое поле с описанием (используем поле с ID 913789 или создаем новое)
    // Для textarea полей в amoCRM используем custom_fields_values
    $customFields = [];
    
    // Функция для безопасного добавления поля
    function addCustomField(&$fields, $fieldId, $value, $fieldName) {
        if (!empty($value) && $value !== 'null' && $value !== 'undefined') {
            $stringValue = is_array($value) || is_object($value) ? json_encode($value) : (string)$value;
            
            // Обрезаем до 255 символов для текстовых полей
            if (strlen($stringValue) > 255) {
                $stringValue = substr($stringValue, 0, 255);
                writeLog("createLead: поле {$fieldName} обрезано до 255 символов");
            }
            
            $fields[] = [
                "field_id" => (int)$fieldId,
                "values" => [["value" => $stringValue]]
            ];
            writeLog("createLead: добавлено поле {$fieldName} (ID: {$fieldId}) = {$stringValue}");
            return true;
        }
        return false;
    }
    
    // Добавляем все необходимые поля (используем ваши ID полей из amoCRM)
    addCustomField($customFields, 914273, $message, 'message');           // Сообщение
    addCustomField($customFields, 914275, $fbp, 'fbp');                   // fbp
    addCustomField($customFields, 914277, $fbc, 'fbc');                   // fbc
    addCustomField($customFields, 914279, $fbclid, 'fbclid');             // fbclid
    addCustomField($customFields, 914281, $page_url, 'page_url');         // page_url
    addCustomField($customFields, 914283, $user_agent, 'user_agent');     // user_agent
    addCustomField($customFields, 914285, $client_ip, 'client_ip');       // client_ip
    
    // Если есть кастомные поля, добавляем их в сделку
    if (!empty($customFields)) {
        $lead["custom_fields_values"] = $customFields;
        writeLog("createLead: добавлено " . count($customFields) . " кастомных полей");
    }
    
    // Также добавляем основное описание в примечание
    $url = amo_url($subdomain, "/api/v4/leads");
    list($code, $body, $err) = amo_request('POST', $url, $token, [$lead]);
    
    if ($code === 401) {
        writeLog("createLead: токен протух, обновляем...");
        if (refreshToken($token, $refreshToken, $subdomain, $clientId, $clientSecret, $redirectUri)) {
            list($code, $body, $err) = amo_request('POST', $url, $token, [$lead]);
        }
    }
    
    if ($code >= 200 && $code < 300) {
        $data = json_decode($body, true);
        $leadId = $data['_embedded']['leads'][0]['id'] ?? null;
        writeLog("✅ createLead: сделка создана! ID = {$leadId}");
        
        // Добавляем примечание с полным описанием
        if ($leadId) {
            addNoteToLead($subdomain, $token, $leadId, $leadDescription, $clientId, $clientSecret, $redirectUri, $refreshToken);
        }
        
        return $leadId;
    }
    
    writeLog("❌ createLead: ОШИБКА! HTTP {$code}, ответ: {$body}");
    return null;
}

function addNoteToLead($subdomain, $token, $leadId, $noteText, $clientId, $clientSecret, $redirectUri, $refreshToken) {
    writeLog("addNoteToLead: добавляем примечание к сделке {$leadId}");
    
    $note = [
        [
            "entity_id" => (int)$leadId,
            "note_type" => "common",
            "text" => $noteText
        ]
    ];
    
    $url = amo_url($subdomain, "/api/v4/leads/notes");
    list($code, $body, $err) = amo_request('POST', $url, $token, $note);
    
    if ($code === 401) {
        if (refreshToken($token, $refreshToken, $subdomain, $clientId, $clientSecret, $redirectUri)) {
            list($code, $body, $err) = amo_request('POST', $url, $token, $note);
        }
    }
    
    if ($code >= 200 && $code < 300) {
        writeLog("✅ addNoteToLead: примечание добавлено");
        return true;
    } else {
        writeLog("⚠️ addNoteToLead: не удалось добавить примечание, HTTP {$code}");
        return false;
    }
}

function linkContactToLead($subdomain, $token, $leadId, $contactId, $clientId, $clientSecret, $redirectUri, $refreshToken) {
    $url = amo_url($subdomain, "/api/v4/leads/{$leadId}/link");
    $payload = [[
        "to_entity_id" => (int)$contactId,
        "to_entity_type" => "contacts",
        "metadata" => ["is_main" => true]
    ]];
    
    list($code, $body, $err) = amo_request('POST', $url, $token, $payload);
    
    if ($code === 401) {
        if (refreshToken($token, $refreshToken, $subdomain, $clientId, $clientSecret, $redirectUri)) {
            list($code, $body, $err) = amo_request('POST', $url, $token, $payload);
        }
    }
    
    return $code >= 200 && $code < 300;
}

// ========== ОТПРАВКА В AMOCRM ==========
function sendToAmoCRM($name, $phone, $message, $fbp, $fbc, $fbclid, $page_url, $user_agent, $client_ip) {
    $subdomain = $_ENV['AMO_SUBDOMAIN'] ?? '';
    $clientId = $_ENV['AMO_CLIENT_ID'] ?? '';
    $clientSecret = $_ENV['AMO_CLIENT_SECRET'] ?? '';
    $redirectUri = $_ENV['AMO_REDIRECT_URI'] ?? '';
    $accessToken = $_ENV['AMO_ACCESS_TOKEN'] ?? '';
    $refreshToken = $_ENV['AMO_REFRESH_TOKEN'] ?? '';
    
    if (empty($subdomain) || empty($accessToken)) {
        writeLog("AmoCRM credentials not configured");
        return ['success' => false, 'error' => 'AmoCRM credentials missing'];
    }
    
    $phoneFormatted = formatPhone($phone);
    if (empty($name)) $name = $phoneFormatted;
    
    writeLog("sendToAmoCRM: поиск/создание контакта");
    
    // Поиск или создание контакта
    $contactId = findContact($subdomain, $accessToken, $phoneFormatted, $clientId, $clientSecret, $redirectUri, $refreshToken);
    
    if (!$contactId) {
        writeLog("sendToAmoCRM: контакт не найден, создаем новый");
        $contactId = createContact($subdomain, $accessToken, $name, $phoneFormatted, $clientId, $clientSecret, $redirectUri, $refreshToken);
        if (!$contactId) {
            writeLog("❌ sendToAmoCRM: не удалось создать контакт");
            return ['success' => false, 'error' => 'Failed to create contact'];
        }
    }
    
    writeLog("sendToAmoCRM: контакт найден/создан, ID = {$contactId}");
    
    // Создание сделки со всеми данными
    $leadId = createLead(
        $subdomain, $accessToken, $name, $phoneFormatted, $message,
        $fbp, $fbc, $fbclid, $page_url, $user_agent, $client_ip,
        $clientId, $clientSecret, $redirectUri, $refreshToken
    );
    
    if (!$leadId) {
        writeLog("❌ sendToAmoCRM: не удалось создать сделку");
        return ['success' => false, 'error' => 'Failed to create lead'];
    }
    
    writeLog("sendToAmoCRM: сделка создана, ID = {$leadId}");
    
    // Привязка контакта к сделке
    $linkResult = linkContactToLead($subdomain, $accessToken, $leadId, $contactId, $clientId, $clientSecret, $redirectUri, $refreshToken);
    
    if ($linkResult) {
        writeLog("✅ sendToAmoCRM: контакт привязан к сделке");
    } else {
        writeLog("⚠️ sendToAmoCRM: не удалось привязать контакт к сделке");
    }
    
    return [
        'success' => true,
        'lead_id' => $leadId,
        'contact_id' => $contactId
    ];
}

// ========== ОСНОВНАЯ ЛОГИКА ==========
writeLog("Начинаем обработку формы");

// Отправка в Telegram
$telegramResult = sendToTelegram($name, $phoneFormatted, $message);

// Отправка в AmoCRM со всеми данными
$amoResult = sendToAmoCRM(
    $name, 
    $phoneFormatted, 
    $message, 
    $fbp, 
    $fbc, 
    $fbclid, 
    $page_url, 
    $user_agent, 
    $client_ip
);

// Формируем ответ
$response = [
    'success' => true,
    'telegram' => $telegramResult,
    'amocrm' => $amoResult,
    'received_data' => [
        'name' => $name,
        'phone' => $phoneFormatted,
        'message' => $message,
        'fbp' => $fbp,
        'fbc' => $fbc,
        'fbclid' => $fbclid,
        'page_url' => $page_url,
        'user_agent' => $user_agent,
        'client_ip' => $client_ip
    ]
];

writeLog("Ответ клиенту", $response);
writeLog("========== КОНЕЦ ЗАПРОСА ==========\n");

echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>