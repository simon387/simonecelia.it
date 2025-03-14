<?php

include_once dirname(__FILE__) . '/../config/Database.php';
include_once dirname(__FILE__) . '/../models/Ip.php';
include_once dirname(__FILE__) . '/../config/config.php';

class IpService
{
	private $database;
	private $connection;
	private $ip;

	public function __construct()
	{
		$this->database = new Database();
		$this->connection = $this->database->getConnection();
		$this->ip = new Ip($this->connection);
	}

	function getIp()
	{
		return $this->ip->read();
	}
}
