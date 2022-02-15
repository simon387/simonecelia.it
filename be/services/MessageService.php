<?php

include_once '../config/Database.php';
include_once '../models/Message.php';
include_once '../config/config.php';

class MessageService
{
//	private $database;
//	private $connection;
//	private $message;

	public function __construct()
	{
//		$this->database = new Database();
//		$this->connection = $this->database->getConnection();
//		$this->message = new Message($this->connection);
	}

	function sendMessage($data): bool
	{
		if (empty($data->name) || empty($data->email) || empty($data->subject) || empty($data->message)) {
			return false;
		}

		$ignore_sending_email = true;
		if (Config::$send_email) {
			$ignore_sending_email = $this->sendMail($data->name, $data->email, $data->subject, $data->message);
		}

		$saved_to_db = true;// WE DON'T SAVE USERS DATA $this->message->create("$data->name", "$data->email", "$data->subject", "$data->message");

		return $ignore_sending_email && $saved_to_db;
	}

	function sendMail($name, $email, $subject, $message): bool
	{
		$head = "From: Simone Celia <" . Config::$smtp_email . ">\r\n";
		$head .= "X-Priority: 3\r\n"; // 2 = urgente, 3 = normale, 4 = bassa priorità
		$head .= "X-Mailer: PHP/" . phpversion();

		$to = Config::$smtp_email;

		$subj = "Messaggio da simonecelia.it";

		$msg = "Questo e' un messaggio inviato dalla form informazioni di simonecelia.it\r\n";
		$msg .= "Dati inseriti nella form:\r\n";
		$msg .= "Nome: " . $name . "\r\n";
		$msg .= "Email: " . $email . "\r\n";
		$msg .= "Oggetto: " . $subject . "\r\n";
		$msg .= "Messaggio: " . $message . "\r\n";

		$parameters = "-f " . Config::$smtp_email;

		return mail($to, $subj, $msg, $head, $parameters);
	}
}