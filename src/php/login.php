<?php 
	include 'DBHelper.php';
	$phone = $_POST["cellPhone"];
	$password = $_POST["password"];
	//判断email和密码是否同时存在;
	$loginCheck = "select * from yintai where phone = '$phone' and password = '$password';";
	$result = query($loginCheck);
	if(count($result)>0){
		echo "{state:true}";
	}else{
		echo "{state:false,message:'电话号码或者密码不对'}";
	}
	session_start();
	$_SESSION['phone_login'] = $phone;
	$lifeTime = 20;
	setcookie(session_name(), session_id(), time() + $lifeTime, "/");
 ?>