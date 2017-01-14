<?php 
	include 'DBHelper.php';
	$password = $_POST["password"];
	$phone = $_POST["cellPhone"];
	//判断email是否存在;
	$search = "select * from yintai where phone = '$phone';";
	$result = query($search);

	if(count($result)<1){
		if($password){
			$sql = "INSERT INTO yintai (phone,password) VALUES ('$phone','$password');";
	    	$excute = excute($sql);
	    	if($excute){
	    		echo '{state:true}';
	    	}else{
	    		echo "{state:false,message:'插入失败'}";
	    	}
		}else{
			echo "{state:true,message:'该用户可以注册'}";
		}
	}else{
    	echo "{state:false,message:'用户已被注册！！！'}";
	}
	
 ?>