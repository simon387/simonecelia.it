<?php

include('config.php');

class Database
{
	public $conn;

	public function getConnection()
	{
		$this->conn = null;
		try {
			$this->conn = new PDO("mysql:host=" . Config::$host . ";dbname=" . Config::$db_name, Config::$username, Config::$password);
			$this->conn->exec("set names utf8");
			$this->conn->exec("SET GLOBAL time_zone='Europe/Madrid");
		} catch (PDOException $exception) {
			echo "Connection error: " . $exception->getMessage();
		}
		return $this->conn;
	}
}