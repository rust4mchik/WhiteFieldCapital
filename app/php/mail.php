<?php

    $recepient = ""; // На какой емайл отправлять
    $siteName = ""; // Название сайта

    $first_name = trim($_POST["first_name"]);
    $last_name = trim($_POST["last_name"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $comment = trim($_POST["message"]);
    $message = "Имя и Фамилия: $first_name $last_name \nАдрес почты: $email \nТелефон: $phone \nКоментарий к письму: $comment";

    $pagetitle = "Заявка с сайта \"$siteName\"";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>