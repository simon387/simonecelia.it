<?php

class Message
{
	private $conn;
	private $table_name = "message";
	private $smtp_email = "simone.celia@simonecelia.it";

	public function __construct($db)
	{
		$this->conn = $db;
	}

	function create($name, $email, $subject, $message)
	{
		if (empty($name) || empty($email) || empty($subject) || empty($message)) {
			return false;
		}

		$query = "INSERT INTO " . $this->table_name .
				" (fromName, fromEmail, fromSubject, fromMessage) VALUES (:fromName, :fromEmail, :fromSubject, :fromMessage)";
		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(":fromName", $name);
		$stmt->bindParam(":fromEmail", $email);
		$stmt->bindParam(":fromSubject", $subject);
		$stmt->bindParam(":fromMessage", $message);

		if ($stmt->execute()) {
			return $this->sendMail($name, $email, $subject, $message);
		}
		return false;
	}

	function sendMail($name, $email, $subject, $message)
	{
		$head = "From: Simone Celia <" . $this->smtp_email . ">\r\n";
		$head .= "X-Priority: 3\r\n"; // 2 = urgente, 3 = normale, 4 = bassa priorità
		$head .= "X-Mailer: PHP/" . phpversion();

		$to = $this->smtp_email;

		$subj = "Messaggio da simonecelia.it";

		$msg = "Questo e' un messaggio inviato dalla form informazioni di simonecelia.it\r\n";
		$msg .= "Dati inseriti nella form:\r\n";
		$msg .= "Nome: " . $name . "\r\n";
		$msg .= "Email: " . $email . "\r\n";
		$msg .= "Oggetto: " . $subject . "\r\n";
		$msg .= "Messaggio: " . $message . "\r\n";

		$parameters = "-f " . $this->smtp_email;

		return mail($to, $subj, $msg, $head, $parameters);
	}
}