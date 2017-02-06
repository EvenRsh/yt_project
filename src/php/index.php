<?php 
	session_start();
	if(isset($_SESSION['phone_login'])){
		echo "{state:true,message:".$_SESSION['phone_login']."}";
	}else{
		echo "{state:false}";
	}
 ?>