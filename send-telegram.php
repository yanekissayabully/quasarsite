<?php
header('Content-Type: application/json');

// Загрузка .env файла
function loadEnv($path = __DIR__ . '/.env') {
    if (!file_exists($path)) {
        return;
    }
    
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue;
        }
        
        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);
        
        if (!array_key_exists($name, $_ENV) && !getenv($name)) {
            putenv(sprintf("%s=%s", $name, $value));
            $_ENV[$name] = $value;
            $_SERVER[$name] = $value;
        }
    }
}

loadEnv();

// Получение данных из .env
$botToken = getenv('BOT_TOKEN');
$chatId = getenv('CHAT_ID');

$data = json_decode(file_get_contents('php://input'), true);

$message = $data['message'] ?? '';
$name = $data['name'] ?? '';
$phone = $data['phone'] ?? '';
$fullData = $data['fullData'] ?? [];

// ========== ОТПРАВКА В TELEGRAM ==========
$telegramUrl = "https://api.telegram.org/bot{$botToken}/sendMessage";

$postData = json_encode([
    'chat_id' => $chatId,
    'text' => $message,
    'parse_mode' => 'Markdown'
]);

$ch = curl_init($telegramUrl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$telegramResponse = curl_exec($ch);
curl_close($ch);

// ========== ОТПРАВКА В AMOCRM ==========
$amoResult = sendToAmoCRM($name, $phone, $fullData);

// ========== ФОРМИРУЕМ ОТВЕТ ==========
$response = [
    'telegram' => json_decode($telegramResponse, true),
    'amocrm' => $amoResult,
    'success' => true
];

echo json_encode($response, JSON_UNESCAPED_UNICODE);

// ========== ФУНКЦИЯ ОТПРАВКИ В AMOCRM ==========
function sendToAmoCRM($name, $phone, $fullData = []) {
    // Конфигурация amoCRM из .env
    $AMO_SUBDOMAIN  = getenv('AMO_SUBDOMAIN');
    $CLIENT_ID      = getenv('AMO_CLIENT_ID');
    $CLIENT_SECRET  = getenv('AMO_CLIENT_SECRET');
    $REDIRECT_URI   = getenv('AMO_REDIRECT_URI');
    $ACCESS_TOKEN   = getenv('AMO_ACCESS_TOKEN');
    $REFRESH_TOKEN  = getenv('AMO_REFRESH_TOKEN');
    
    // Если имя пустое, используем телефон
    if (empty($name)) {
        $name = $phone;
    }
    
    // Форматируем телефон
    $phoneFormatted = formatPhone($phone);
    
    // 1. Поиск существующего контакта
    $contactId = findContact($AMO_SUBDOMAIN, $ACCESS_TOKEN, $phoneFormatted, $CLIENT_ID, $CLIENT_SECRET, $REDIRECT_URI, $REFRESH_TOKEN);
    
    // 2. Если контакт не найден — создаём новый
    if (!$contactId) {
        $contactId = createContact($AMO_SUBDOMAIN, $ACCESS_TOKEN, $name, $phoneFormatted, $CLIENT_ID, $CLIENT_SECRET, $REDIRECT_URI, $REFRESH_TOKEN);
        if (!$contactId) {
            return ['success' => false, 'error' => 'Failed to create contact'];
        }
    }
    
    // 3. Создаём сделку
    $leadId = createLead($AMO_SUBDOMAIN, $ACCESS_TOKEN, $name, $fullData, $CLIENT_ID, $CLIENT_SECRET, $REDIRECT_URI, $REFRESH_TOKEN);
    if (!$leadId) {
        return ['success' => false, 'error' => 'Failed to create lead'];
    }
    
    // 4. Линкуем контакт к сделке
    $linkResult = linkContactToLead($AMO_SUBDOMAIN, $ACCESS_TOKEN, $leadId, $contactId, $CLIENT_ID, $CLIENT_SECRET, $REDIRECT_URI, $REFRESH_TOKEN);
    if (!$linkResult) {
        return ['success' => false, 'error' => 'Failed to link contact to lead'];
    }
    
    return ['success' => true, 'lead_id' => $leadId, 'contact_id' => $contactId];
}

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========

function formatPhone($raw) {
    $d = preg_replace('/\D+/', '', (string)$raw);
    if ($d === '') return '';
    if (strlen($d) === 11 && $d[0] === '8') return '+7' . substr($d, 1);
    if (strlen($d) === 11 && $d[0] === '7') return '+7' . substr($d, 1);
    if (strlen($d) === 10) return '+7' . $d;
    return ($raw[0] === '+') ? '+' . $d : '+7' . $d;
}

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
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2
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
    
    // Если токен протух — обновляем
    if ($code === 401) {
        $newToken = $token;
        $newRefresh = $refreshToken;
        if (refreshToken($newToken, $newRefresh, $subdomain, $clientId, $clientSecret, $redirectUri)) {
            list($code, $body, $err) = amo_request('GET', $url, $newToken);
            $token = $newToken;
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
        $newToken = $token;
        $newRefresh = $refreshToken;
        if (refreshToken($newToken, $newRefresh, $subdomain, $clientId, $clientSecret, $redirectUri)) {
            list($code, $body, $err) = amo_request('POST', $url, $newToken, $payload);
            $token = $newToken;
        }
    }
    
    if ($code >= 200 && $code < 300) {
        $data = json_decode($body, true);
        return $data['_embedded']['contacts'][0]['id'] ?? null;
    }
    
    return null;
}

function createLead($subdomain, $token, $name, $fullData, $clientId, $clientSecret, $redirectUri, $refreshToken) {
    $lead = [
        "name" => "Заявка с VSL — " . ($name ?: 'Клиент'),
        "_embedded" => [
            "tags" => [
                ["name" => "VSL_LEAD"],
                ["name" => "crmbolat.kz"],
                ["name" => "КВАЛИФИЦИРОВАН"]
            ]
        ]
    ];
    
    // Добавляем доп. поля, если они есть
    $customFields = [];
    if (!empty($fullData['businessType'])) {
        $customFields[] = [
            "field_id" => 913789, // Замени на реальный ID поля "Тип бизнеса"
            "values" => [["value" => $fullData['businessType']]]
        ];
    }
    if (!empty($fullData['crmUsage'])) {
        $customFields[] = [
            "field_id" => 913791, // Замени на реальный ID поля "Использование CRM"
            "values" => [["value" => $fullData['crmUsage']]]
        ];
    }
    if (!empty($fullData['crmIssues'])) {
        $customFields[] = [
            "field_id" => 913793, // Замени на реальный ID поля "Проблемы с CRM"
            "values" => [["value" => $fullData['crmIssues']]]
        ];
    }
    if (!empty($fullData['technicalSupport'])) {
        $customFields[] = [
            "field_id" => 913795, // Замени на реальный ID поля "Техподдержка"
            "values" => [["value" => $fullData['technicalSupport']]]
        ];
    }
    if (!empty($fullData['vslWatchTime'])) {
        $customFields[] = [
            "field_id" => 913797, // Замени на реальный ID поля "Время просмотра видео"
            "values" => [["value" => $fullData['vslWatchTime']]]
        ];
    }
    
    if (!empty($customFields)) {
        $lead["custom_fields_values"] = $customFields;
    }
    
    $url = amo_url($subdomain, "/api/v4/leads");
    list($code, $body, $err) = amo_request('POST', $url, $token, [$lead]);
    
    if ($code === 401) {
        $newToken = $token;
        $newRefresh = $refreshToken;
        if (refreshToken($newToken, $newRefresh, $subdomain, $clientId, $clientSecret, $redirectUri)) {
            list($code, $body, $err) = amo_request('POST', $url, $newToken, [$lead]);
            $token = $newToken;
        }
    }
    
    if ($code >= 200 && $code < 300) {
        $data = json_decode($body, true);
        return $data['_embedded']['leads'][0]['id'] ?? null;
    }
    
    return null;
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
        $newToken = $token;
        $newRefresh = $refreshToken;
        if (refreshToken($newToken, $newRefresh, $subdomain, $clientId, $clientSecret, $redirectUri)) {
            list($code, $body, $err) = amo_request('POST', $url, $newToken, $payload);
            $token = $newToken;
        }
    }
    
    return ($code >= 200 && $code < 300);
}