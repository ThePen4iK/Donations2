<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

$email = new PHPMailer(true);
$email->CharSet = 'UTF-8';
$email->setLanguage('ru', 'PHPMailer/language/');
$email->IsHTML(true);
// infoTeamVM@gmail.com evgeniy152001@gmail.com
$email->addAddress('infoTeamVM@gmail.com');



if(!$email->send()){
    $message = 'ошибка'
}else{
    $message ' отправленно'
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>