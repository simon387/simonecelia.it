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

		// Estrai il valore IP dal risultato
		$row = $stmt->fetch(PDO::FETCH_ASSOC);
		return $row['ip']; // Restituisci solo il valore IP come stringa
	}
}
