/*
==============
    ver 1.0.1 create by EvenRH 2017 1 - 14
==============  
*/
//页面加载
;requirejs(['config'], function() {
    requirejs(['jquery'], function($) {
        console.log($)
        $(function() {
            var $form = $('form');
            var $btnSubmit = $('#submitButton');
            var $ytRight = $('.ytRight');
            //获取输入数据
            var $phone = $('#cellPhone');
            var $code = $('#setCode');
            var $password = $('#password');
            var $repassword = $('#repassword');

            function randomNum() {
                var num = '';
                var str = '0123456789';
                for (var i = 0; i < 6; i++) {
                    num += parseInt(Math.random() * str.length);
                }
                return num;
            }
            //登录跳转
            $ytRight.on('click', 'a#login', function() {
                    window.location.href = 'login.html';
                })
                //手机号码输入判断是否存在数据库
                .on('change', '#cellPhone', function() {
                    var len = $phone.val().length;
                    if (!/^1[3-578]\d{9}$/.test($phone.val())) {
                        $phone.siblings().remove();
                        $('<b/>').text('格式不对').insertAfter($phone);
                        return false;
                    } else {
                        $phone.siblings().remove();
                        //检测数据库是否存在该手机
                        $.post('../php/register.php', {
                            cellPhone: $phone.val(),
                            password: $password.val(),
                        }, function(response) {
                            var data = eval('(' + response + ')');
                            if (!data.state) {
                                $('<b/>').text(data.message).insertAfter($phone);
                                return false;
                            } else {
                                $('<b/>').text('用户可以注册').insertAfter($phone);
                                //生成随机验证码
                                $ytRight.on('click', '#getCode', function() {
                                    $('#setCode').val(randomNum());
                                })
                            }
                        });
                    }
                })
                //输入密码
                .on('change', '#password', function() {
                    if (!/^\w{6,12}$/.test($password.val())) {
                        $password.siblings().remove();
                        $('<b/>').text('密码格式不对').insertAfter($password);
                        return false;
                    } else {
                        $password.siblings().remove();
                        //判断所有输入框是否已经存在数据
                        $ytRight.on('input', function() {
                            if ($code.val() && $password.val() && $repassword.val()) {
                                //提交按钮高亮
                                $btnSubmit.addClass('active')
                            } else {
                                $btnSubmit.removeClass('active')
                            }
                        })
                    }
                })
                //提交
                .on('click', '#submitButton', function() {
                    //判断提交按钮是否高亮
                    if ($btnSubmit.hasClass('active')) {
                        if ($password.val() != $repassword.val()) {
                            $repassword.siblings().remove();
                            $('<b/>').text('密码不一致').insertAfter($repassword);
                            return false;
                        } else {
                            $repassword.siblings().remove();
                            // console.log('可以提交数据');
                            $.post('../php/register.php', {
                                cellPhone: $phone.val(),
                                password: $password.val(),
                            }, function(response) {
                                var data = eval('(' + response + ')');
                                if (data.state) {
                                    alert('注册成功！');
                                    window.location.href = 'login.html';
                                } else {
                                    alert(data.message);
                                }
                            })
                        }
                    }
                })
        });
    })
});
