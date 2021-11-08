<?php

class Message
{
	private $conn;
	private $table_name = "message";
	public $id;
	public $name;
	public $email;
	public $subject;
	public $message;
	public $timestamp;

	public function __construct($db)
	{
		$this->conn = $db;
	}

	function create($name_, $email_, $subject_, $message_)
	{
		$query = "INSERT INTO " . $this->table_name .
			" (fromName, fromEmail, fromSubject, fromMessage) VALUES (:fromName, :fromEmail, :fromSubject, :fromMessage)";
		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(":fromName", $name_);
		$stmt->bindParam(":fromEmail", $email_);
		$stmt->bindParam(":fromSubject", $subject_);
		$stmt->bindParam(":fromMessage", $message_);

		if ($stmt->execute()) {
			return true;
		}
		return false;
	}
}