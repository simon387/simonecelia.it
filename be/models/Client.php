<?php

class Client
{
	private $connection;
	private $table_name = "client";

	public function __construct($connection)
	{
		$this->connection = $connection;
	}

	function create($ip, $details, $type): bool
	{
		$query = "INSERT INTO " . $this->table_name . " (ip, type, details) VALUES (:ip, :type, :details)";
		$stmt = $this->connection->prepare($query);

		$stmt->bindParam(":ip", $ip);
		$stmt->bindParam(":type", $type);
		$stmt->bindParam(":details", $details);

		return $stmt->execute();
	}
}
