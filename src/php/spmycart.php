<?php 
	$count = $_POST["count"];
	session_start();
	$_SESSION['carCount'] = $count;
	$lifeTime = 20;
	setcookie(session_name(), session_id(), time() + $lifeTime, "/");
	echo $_SESSION['carCount'];
 ?>