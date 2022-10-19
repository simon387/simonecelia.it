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

	function save($type): bool
	{
		$ip = $this->getIp();
		$details = $this->getDetails();
		return $this->client->create($ip, $details, $type);
	}

	function saveClient($data): bool
	{
		if (empty($data->details)) {
			return false;
		}
		$ip = $this->getIp();
		return $this->client->create($ip, $data->details, "f");
	}

	function getIp()
	{
		return getenv('HTTP_CLIENT_IP') ?:
			getenv('HTTP_X_FORWARDED_FOR') ?:
				getenv('HTTP_X_FORWARDED') ?:
					getenv('HTTP_FORWARDED_FOR') ?:
						getenv('HTTP_FORWARDED') ?:
							getenv('REMOTE_ADDR');
	}

	function getDetails(): string
	{
		$details = "";
		foreach ($_SERVER as $parm => $value) {
			$details .= "$parm = '$value'\n";
		}
		return $details;
	}
}
