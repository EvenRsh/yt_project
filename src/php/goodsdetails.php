<?php 
	$title = $_POST['title'];
	$price = $_POST['price'];
	$color = $_POST['color'];
	$size = $_POST['size'];
	$count = $_POST['count'];
	session_start();
	if($title && $price && $color && $size && $count){
		$_SESSION['goods'] = $title.";".$price.";".$color.";".$size.";".$count;
		echo true;
	}else{
		echo false;
	}
 ?>