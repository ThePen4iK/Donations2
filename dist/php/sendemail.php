<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../libs/PHPMailer/src/Exception.php';
require '../libs/PHPMailer/src/PHPMailer.php';
require '../libs/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer/language/');
$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->Host = 'smtp.gmail.com';
$mail->Port = 465;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

$mail->SMTPAuth = true;

$mail->Username = 'mailsendmysites@gmail.com';
$mail->Password = '112321364';

$mail->setFrom('from@example.com', 'First Last');
$mail->addReplyTo('replyto@example.com', 'First Last');
$mail->addAddress('morozovprav@gmail.com', 'John Doe');

$mail->Subject = 'PHPMailer GMail SMTP test';
$mail->Body    = 'This is the HTML message body <b>in bold!</b> <br>' . htmlspecialchars($_POST['name']);
$mail->AltBody = 'This is a plain-text message body';



if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}


//$mail->CharSet = 'UTF-8';
//$mail->setLanguage('ru', 'PHPMailer/language/');
//$mail->IsHTML(true);
//// infoTeamVM@gmail.com evgeniy152001@gmail.com
//$mail->addAddress('infoTeamVM@gmail.com');



//if(!$mail->send()){
//    $message = 'ошибка';
//}else{
//    $message = 'отправленно';
//}
//
//$response = ['message' => $message];
//
//header('Content-type: application/json');
//echo json_encode($response);
