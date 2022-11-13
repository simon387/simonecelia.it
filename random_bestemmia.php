<?php
header('Content-Type: application/json;');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
echo file_get_contents('https://bestemmie.org/api/random/');
exit();
