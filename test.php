<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode([
    'status' => 'ok',
    'method' => $_SERVER['REQUEST_METHOD'],
    'time' => date('Y-m-d H:i:s')
]);