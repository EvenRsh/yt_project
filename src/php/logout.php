<?php 
	include 'DBHelper.php';
	session_start();
	if(isset($_SESSION['phone_login'])){
		unset($_SESSION['phone_login']);
		header("Location: ../index.html");
	}
 ?>