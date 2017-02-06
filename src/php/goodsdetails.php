<?php 
	$title = $_POST['title'];
	$price = $_POST['price'];
	$color = $_POST['color'];
	$src = $_POST['src'];
	$size = $_POST['size'];
	$count = $_POST['count'];
	session_start();
	if($title && $price && $color && $src && $size && $count){
		$_SESSION['goods'] = "title".":".$title.";"."price".":".$price.";"."color".":".$color.";"."src".":".$src.";"."size".":".$size.";"."count".":".$count;
		echo true;
	}else{
		echo false;
	}
 ?>