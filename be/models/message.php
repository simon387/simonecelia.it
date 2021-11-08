<?php

//use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\Exception;
require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

class Message
{
	private $conn;
	private string $table_name = "message";

	public function __construct($db)
	{
		$this->conn = $db;
	}

	function create($name_, $email_, $subject_, $message_)
	{
		$query = "INSERT INTO " . $this->table_name .
				" (fromName, fromEmail, fromSubject, fromMessage) VALUES (:fromName, :fromEmail, :fromSubject, :fromMessage)";
		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(":fromName", $name_);
		$stmt->bindParam(":fromEmail", $email_);
		$stmt->bindParam(":fromSubject", $subject_);
		$stmt->bindParam(":fromMessage", $message_);

		if ($stmt->execute()) {
			//sendMail($name_, $email_, $subject_, $message_);
			//Create an instance; passing `true` enables exceptions
			$mail = new PHPMailer(true);

			try {
				//TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

				//Recipients
				$mail->setFrom('webmaster@simonecelia.it', 'Mailer');
				$mail->addAddress('simone.celia@simonecelia.it', 'Joe User');     //Add a recipient
				$mail->addReplyTo('simone.celia@simonecelia.it', 'Information');

				//Content
				$mail->isHTML(true);                                  //Set email format to HTML
				$mail->Subject = 'Here is the subject';
				$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
				$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

				$mail->send();
				echo 'Message has been sent';
			} catch (Exception $e) {
				echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
			}
			return true;
		}
		return false;
	}

	function sendMail($name_, $email_, $subject_, $message_)
	{

		$to = 'simone.celia@simonecelia.it';
		$subject = 'the subject';
		$message = 'hello';
		$headers = 'From: simone.celia@simonecelia.it' . "\r\n" .
				'Reply-To: simone.celia@simonecelia.it' . "\r\n" .
				'X-Mailer: PHP/' . phpversion();

		mail($to, $subject, $message, $headers);

	}
}