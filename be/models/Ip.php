<?php

class Ip
{
	private $connection;

	public function __construct($connection)
	{
		$this->connection = $connection;
	}

	function read()
	{
		$query = "SELECT ip from ip where id=1";
		$stmt = $this->connection->prepare($query);

		$stmt->execute();
		return $stmt;
	}
}
