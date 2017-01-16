/*
==============
    ver 1.0.1 create by EvenRH 2017 1 - 14
==============  
*/
//页面加载

$(function() {
    var $form = $('form');
    var btnSubmit = $('#submitButton');
    var $phone = $('#cellPhone');
    var $code = $('#setCode');
    var $password = $('#password');
    var $repassword = $('#repassword');
   
    //手机号码输入判断是否存在
    var index ;
    $form.on('input', ':input#cellPhone', function() {
        var len = $phone.val().length;
        if (len == 11 && /^1[3-578]\d{9}$/.test($phone.val())) {
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
                    $form.on('click',':input#getCode',function() {
                        $('#setCode').val(randomNum());
                    })
                    //判断所有的信息是否已经填写完成
                    .on('input', function() {
                        if ($code.val() && $password.val() && $repassword.val()) {
                            //提交按钮高亮
                            btnSubmit.addClass('active')
                        }else{
                            btnSubmit.removeClass('active')
                        }
                    })
                    //后提交数据到服务器再保存到数据库
                    .on('click',':input#submitButton',function() {
                        //判断提交按钮是否高亮
                        if (btnSubmit.hasClass('active')) {
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
                    alert(data.message);
                }
            });
        }else if(len > 11){
            $phone.val(index);
        }else if(!/^1[3-578]\d{9}$/.test($phone.val()) && len == 11){
            $('<span/>').text('格式不对').insertAfter($phone);
        }else if(len < 11){
            $phone.siblings().remove();
        }
    })
    function randomNum() {
        var num = '';
        var str = '0123456789';
        for (var i = 0; i < 6; i++) {
            num += parseInt(Math.random() * str.length);
        }
        return num;
    }
    //登录跳转
    $('#login').on('click', function() {
        window.location.href = 'login.html';
    });




});
