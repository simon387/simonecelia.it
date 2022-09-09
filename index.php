<?php
include_once "util/constants.php";
include_once 'be/services/ClientService.php';
$ip = getenv('HTTP_CLIENT_IP') ?:
		getenv('HTTP_X_FORWARDED_FOR') ?:
				getenv('HTTP_X_FORWARDED') ?:
						getenv('HTTP_FORWARDED_FOR') ?:
								getenv('HTTP_FORWARDED') ?:
										getenv('REMOTE_ADDR');
$details = "";
foreach ($_SERVER as $parm => $value) {
	$details .= "$parm = '$value'\n";
}
$clientService = new ClientService();
$clientService->save($ip, $details);
?>

<!DOCTYPE html>
<html lang="en">
<?php include "components/head.php"; ?>
<body>
<?php include "components/header.php"; ?>
<?php include "components/hero.html"; ?>
<main id="main">
<?php include "components/about.php"; ?>
<?php include "components/services.php"; ?>
<?php include "components/counter.html"; ?>
<?php include "components/portfolio.php"; ?>
<?php //testimonials, blog?>
<?php include "components/contact.php"; ?>
</main>
<?php include "components/footer.php"; ?>
<?php include "components/script.html"; ?>
</body>
</html>