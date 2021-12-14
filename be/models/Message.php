<?php

class Message
{
	private $connection;
	private $table_name = "message";

	public function __construct($connection)
	{
		$this->connection = $connection;
	}

	function create($name, $email, $subject, $message): bool
	{
		$query = "INSERT INTO " . $this->table_name .
				" (fromName, fromEmail, fromSubject, fromMessage) VALUES (:fromName, :fromEmail, :fromSubject, :fromMessage)";
		$stmt = $this->connection->prepare($query);

		$stmt->bindParam(":fromName", $name);
		$stmt->bindParam(":fromEmail", $email);
		$stmt->bindParam(":fromSubject", $subject);
		$stmt->bindParam(":fromMessage", $message);

		return $stmt->execute();
	}
}