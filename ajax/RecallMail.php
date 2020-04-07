<?php
    $name = $_POST['name'];
    $tel = $_POST['tel'];

    $subject = "=?utf-8?B?".base64_encode("Заявка о перезвоне")."?=";
    $message = "Имя заявителя: $name<br> \n Телефон заявителя: $tel";
    $headers = "From: info@favorite-car.com\r\nContent-type: text/html; charset=\"utf-8\"\r\n";

    $success = mail("cybirgpl@gmail.com", $subject, $message, $headers);
    echo $success;
?>