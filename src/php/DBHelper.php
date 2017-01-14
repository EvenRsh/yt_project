<?php 

    function connect(){
        $servername = "127.0.0.1";
        $username = "root";
        $password = "root";
        $db = '1000phone';        
        $conn = mysqli_connect($servername,$username,$password,$db); 
        if (mysqli_connect_error($conn)) 
        { 
            echo "连接 MySQL 失败: " . mysqli_connect_error();
            return null;
        }
        return $conn;
    }
     
    function query($sql){
        $conn = connect();
        //脚本，也叫数据库脚本，返回一个结果集（对象）
        $result = mysqli_query($conn,$sql);
         //定义了一个数组
        $jsonData = array(); 
        if ($result)
        {
             //在结果集中获取对象(逐行获取) 
            while ($obj = mysqli_fetch_object($result))
            {
                $jsonData[] = $obj;
            }               
           
            // 释放结果集
            mysqli_free_result($result);
        } 
        mysqli_close($conn);
        return $jsonData;
    }

    // $sql = "SELECT * FROM login;";

    // query($sql);
    function excute($sqlinsert){
        $conn = connect();
        $result = mysqli_query($conn,$sqlinsert);
        // if($result){
        //     echo "插入数据成功";
        // }else{
        //     echo "插入数据失败"; 
        // }
        mysqli_close($conn);
        return $result;
    }
    
    //查询语句，只是呈现结果，不改变数据
    // $sql = "SELECT * FROM student where account = 'zge' and password = '123456';";//返回一个结果集，存放在内存当中，用完要释放
    //逻辑语句，改变数据
    //insert into, update, delete // 返回一个布尔值，true|false，不用释放
    // $insert = "insert into dk(name) values('" . $_POST["name"] . "')";

    // $sqlinsert = "INSERT INTO login (username,account,password,gender) VALUES ('".$_POST["username"]."','".$_POST["account"]."','".$_POST["password"]."','".$_POST["gender"]."');";
    // excute($sqlinsert);
?>