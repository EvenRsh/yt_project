/*
==============
	ver 1.0.1 create by EvenRH 2017 1 - 14
==============	
*/
//页面加载
$(function(){
	// console.log($('form'));
	var $phone = $('#cellPhone');
	//手机号码输入判断是否存在
	$phone.on('keyup',function(){
		var _val = $phone.val();
		if(_val.length == 11){
			console.log($phone.val());
			$.post('../php/register.php',{
				cellPhone:$('#cellPhone').val(),
				password: $('#password').val(),
				},function(response){
					var data = eval('('+response+')');
		            if(data.state){
		            	alert(data.message);
	            	}else{
	            		alert(data.message);
	            	}
			});
		}
	});
	//登录跳转
	$('#login').on('click',function(){
		window.location.href='login.html';
	});
	//验证码按钮点击生成随机验证码
	$("#getCode").on('click',function(){
		function randomNum(){
			var num = '';
			var str = '0123456789';
			for(var i=0;i<6;i++){
				num += parseInt(Math.random()*str.length);
			}
			return num;
		}
		$('#setCode').val(randomNum());
	});
	//判断所有的信息是否已经填写完成
	var arr = [];
	
	if(arr.length ==4){
		console.log('123');
	//提交按钮高亮后提交数据到服务器再保存到数据库
		$('#submitButton').addClass('active').on('click',function(){
			$.post('../php/register.php',{
				cellPhone:$('#cellPhone').val(),
				password: $('#password').val(),
			},function(response){
				var data = eval('('+response+')');
	            if(data.state){
	            	alert('注册成功！');
	            }else{
	            	alert(data.message);
	            }
			})
		});
	}

});