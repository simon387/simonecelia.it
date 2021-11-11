<?php

class Message
{
	private $conn;
	private $table_name = "message";
	
	public function __construct($db)
	{
		$this->conn = $db;
	}
	
	function create($name, $email, $subject, $message)
	{
		$query = "INSERT INTO " . $this->table_name .
			" (fromName, fromEmail, fromSubject, fromMessage) VALUES (:fromName, :fromEmail, :fromSubject, :fromMessage)";
		$stmt = $this->conn->prepare($query);
		
		$stmt->bindParam(":fromName", $name);
		$stmt->bindParam(":fromEmail", $email);
		$stmt->bindParam(":fromSubject", $subject);
		$stmt->bindParam(":fromMessage", $message);
		
		if ($stmt->execute()) {
			$this->sendMail($name, $email, $subject, $message);
			return true;
		}
		return false;
	}
	
	function sendMail($name, $email, $subject, $message)
	{
		$intestazione = "From: Simone Celia <simone.celia@simonecelia.it>\r\n";
		$intestazione .= "X-Priority: 3\r\n"; // 2 = urgente, 3 = normale, 4 = bassa priorità
		$intestazione .= "X-Mailer: PHP/" . phpversion();
		
		$destinatario = "simone.celia@simonecelia.it";
		
		$oggetto = "Messaggio da simonecelia.it";
		
		$messaggio = "Questo e' un messaggio inviato dalla form informazioni di simonecelia.it\r\n";
		$messaggio .= "Dati inseriti nella form:\r\n";
		$messaggio .= "Nome: " . $name . "\r\n";
		$messaggio .= "Email: " . $email . "\r\n";
		$messaggio .= "Oggetto: " . $subject . "\r\n";
		$messaggio .= "Messaggio: " . $message . "\r\n";
		
		$parametri = "-f simone.celia@simonecelia.it";
		
		mail($destinatario, $oggetto, $messaggio, $intestazione, $parametri);
	}
}