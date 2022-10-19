<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../services/ClientService.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	http_response_code(405);
	echo json_encode(array("response" => "Method not supported"));
	die();
}

$clientServices = new ClientService();
$data = json_decode(file_get_contents("php://input"));

if ($clientServices->saveFromFrontend($data)) {
	http_response_code(200);
	echo json_encode(array("response" => "Client created"));
} else {
	http_response_code(500);
	echo json_encode(array("response" => "Impossible to create the Client"));
}