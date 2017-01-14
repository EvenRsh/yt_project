<?php 
	include 'DBHelper.php';
	session_start();
	if(isset($_SESSION['email_login'])){
		unset($_SESSION['email_login']);
		header("Location: login.html");
	}
 ?>