<?php

class Client
{
	private $connection;
	private $table_name = "client";

	public function __construct($connection)
	{
		$this->connection = $connection;
	}

	function create($ip, $details): bool
	{
		$query = "INSERT INTO " . $this->table_name . " (ip, details) VALUES (:ip, :details)";
		$stmt = $this->connection->prepare($query);

		$stmt->bindParam(":ip", $ip);
		$stmt->bindParam(":details", $details);

		return $stmt->execute();
	}
}
