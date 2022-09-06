<?php

class Client
{
	private $connection;
	private $table_name = "client";

	public function __construct($connection)
	{
		$this->connection = $connection;
	}

	function create($ip): bool
	{
		$query = "INSERT INTO " . $this->table_name . " (ip) VALUES (:ip)";
		$stmt = $this->connection->prepare($query);

		$stmt->bindParam(":ip", $ip);

		return $stmt->execute();
	}
}
