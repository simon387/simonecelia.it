<?php

include_once dirname(__FILE__) . '/../config/Database.php';
include_once dirname(__FILE__) . '/../models/Client.php';
include_once dirname(__FILE__) . '/../config/config.php';

class ClientService
{
	private $database;
	private $connection;
	private $client;

	public function __construct()
	{
		$this->database = new Database();
		$this->connection = $this->database->getConnection();
		$this->client = new Client($this->connection);
	}

	function save($ip, $details)
	{
		$this->client->create($ip, $details);
	}
}
