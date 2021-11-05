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
		$query = "INSERT INTO " . $this->table_name . " (name, email, subject, message) VALUES (:name, :email, :subject, :message)";
		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(":name", $name_);
		$stmt->bindParam(":email", $email_);
		$stmt->bindParam(":subject", $subject_);
		$stmt->bindParam(":message", $message_);

		if ($stmt->execute()) {
			return true;
		}
		return false;
	}

	function read($id_)
	{
		$query = "select m.message from " . $this->table_name . " m where m.id=:id_ ";
		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(":id_", $id_);

		$stmt->execute();
		return $stmt;
	}

	function readAll()
	{
		$query = "select m.id, m.timestamp, m.message from " . $this->table_name . " m  order by m.timestamp desc";
		$stmt = $this->conn->prepare($query);
		$stmt->execute();
		return $stmt;
	}

	function deleteAll()
	{
		$query = "TRUNCATE TABLE " . $this->table_name;
		$stmt = $this->conn->prepare($query);

		if ($stmt->execute()) {
			return true;
		}
		return false;
	}

	function delete($id_)
	{
		$query = "delete from " . $this->table_name . " where id=:id_";
		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(":id_", $id_);

		if ($stmt->execute()) {
			return true;
		}
		return false;
	}
}