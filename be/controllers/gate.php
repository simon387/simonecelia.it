<?php
// Abilita il CORS per permettere le richieste dal frontend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

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
	// Prima chiamata: ottieni l'IP
	$ipResponse = file_get_contents('https://www.simonecelia.it/ipapi/be/ip/read.php', false, $context);

	if (!$ipResponse) {
		throw new Exception("Impossibile recuperare l'indirizzo IP");
	}

	// Assumendo che la risposta sia direttamente l'IP come testo
	$ipAddress = trim($ipResponse);

	// Seconda chiamata: usa l'IP ottenuto per chiamare il proxy
	$proxyUrl = "http://{$ipAddress}:8080/proxy";
	$proxyResponse = file_get_contents($proxyUrl, false, $context);

	if (!$proxyResponse) {
		throw new Exception("Impossibile contattare il proxy all'indirizzo {$proxyUrl}");
	}

	// Invia la risposta al client
	echo $proxyResponse;

} catch (Exception $e) {
	handleError($e->getMessage());
}
