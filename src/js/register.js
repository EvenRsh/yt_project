/*
==============
    ver 1.0.1 create by EvenRH 2017 1 - 14
==============  
*/
//页面加载

$(function() {
    // console.log($('form'));
    var $phone = $('#cellPhone');
    var $code = $('#setCode');
    var $password = $('#password');
    var $repassword = $('#repassword');
   
    //手机号码输入判断是否存在
    $('form').validate();
    var index ;
    $('form').on('input', ':input#cellPhone', function() {
        if ($phone.val().length == 11 ) {
            index=$phone.val();
            //检测数据库是否存在该手机
            $.post('../php/register.php', {
                cellPhone: $phone.val(),
                password: $password.val(),
            }, function(response) {
                var data = eval('(' + response + ')');
                if (data.state) {

                    console.log(data.message);
                    //验证码按钮点击生成随机验证码
                    $("#getCode").on('click', function() {
                        function randomNum() {
                            var num = '';
                            var str = '0123456789';
                            for (var i = 0; i < 6; i++) {
                                num += parseInt(Math.random() * str.length);
                            }
                            return num;
                        }
                        $('#setCode').val(randomNum());
                    });
                    //判断所有的信息是否已经填写完成
                    $('form').on('input', function() {
                        
                        if ($phone.val().length == 11) {
                            if ($code.val() && $password.val() && $repassword.val()) {
                                //提交按钮高亮
                                $('#submitButton').addClass('active')
                            }
                        }
                    });
                    //后提交数据到服务器再保存到数据库
                    //判断提交按钮是否高亮
                    $('#submitButton').on('click', function() {
                        console.log("点击")
                        
                        if ($('#submitButton').hasClass('active')) {
                           
                            if (/^\w{6,12}$/.test($password.val())) {

                                if ($password.val() == $repassword.val()) {
                                    // console.log('可以提交数据');
                                    $.post('../php/register.php', {
                                        cellPhone: $phone.val(),
                                        password: $password.val(),
                                    }, function(response) {
                                        var data = eval('(' + response + ')');
                                        if (data.state) {
                                            alert('注册成功！');
                                            return;
                                        } else {
                                            alert(data.message);
                                        }
                                    })
                                } else {
                                    console.log('密码不一致');
                                }
                            } else {
                                console.log('密码格式不对');
                            }
                        }

                    });
                } else {
                    console.log(data.message);
                }
            });
        }else if($phone.val().length > 11){
            $phone.val(index);
        }
    });

    //登录跳转
    $('#login').on('click', function() {
        window.location.href = 'login.html';
    });




});
