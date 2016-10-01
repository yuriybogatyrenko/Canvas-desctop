<?php
	$to = 'uccr.su@gmail.com, fedor.mokryshev@gmail.com';
	//$to = $_POST['need_mail'];
//	$_POST['u_name'] = mb_convert_encoding($_POST['u_name'], "windows-1251", "utf-8");
//	$_POST['u_phone'] = mb_convert_encoding($_POST['u_phone'], "windows-1251", "utf-8");

	
	$subject = 'Canvas';
	$message = '<p>Имя: '.$_POST['u_name'].'</p> <p>Телефон: '.$_POST['u_phone'].'</p>';

//    $message = mb_convert_encoding($message, "windows-1251", "utf-8");

	$header = "From: noreply@uccr.su\r\n";
	$header.= "MIME-Version: 1.0\r\n"; 
	$header.= "Content-Type: text/html; charset=utf8\r\n";
	$header.= "X-Priority: 1\r\n"; 
	 
	mail($to, $subject, $message, $header);

?>
