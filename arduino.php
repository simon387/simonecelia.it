<?php
// Abilita il CORS per permettere le richieste dal frontend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: */*");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once 'be/services/IpService.php';

$ipServices = new IpService();

// Gestione degli errori
function handleError($message)
{
	http_response_code(500);
	echo json_encode(['error' => $message]);
	exit;
}

try {
	$opts = [
		'http' => [
			'method' => 'GET',
			'header' => 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
		]
	];

	$context = stream_context_create($opts);
	$ipAddress = $ipServices->getIp();

	// Ottieni l'IP del chiamante
	$callerIp = $_SERVER['REMOTE_ADDR'];
	// Alternativa per ottenere l'IP anche dietro proxy
	if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
		$callerIp = $_SERVER['HTTP_X_FORWARDED_FOR'];
	}

	// Seconda chiamata: usa l'IP ottenuto per chiamare il proxy e passa l'IP del chiamante
	$proxyUrl = "http://{$ipAddress}:8080/proxy/info?ip=" . urlencode($callerIp);
	$proxyResponse = file_get_contents($proxyUrl, false, $context);

	if (!$proxyResponse) {
		throw new Exception("Impossibile contattare il proxy all'indirizzo {$proxyUrl}");
	}

	// Invia la risposta al client
	echo $proxyResponse;

} catch (Exception $e) {
	handleError($e->getMessage());
}
