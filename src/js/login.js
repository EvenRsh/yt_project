;
requirejs(['config'], function() {
    requirejs(['jquery'], function($) {
        $(function() {
            var $mainLogin = $('.mainLogin');
            var $phone = $('#cellPhone');
            var $password = $('#password');
            var $btnSubmit = $(':submit');
            //tabs事件切换
            $('.ytRight').on('click', 'li', function() {
                    var $self = $(this);
                    $self.addClass('active').siblings('li').removeClass('active');
                    var idx = $self.index();
                    if (idx == 0) {
                        $mainLogin.children('p').show().siblings('.scancode-login').hide();
                        $phone.attr('placeholder', "请输入银泰护照号(手机号)");
                    } else if (idx == 1) {
                        $mainLogin.children('p').show().siblings('.scancode-login').hide();
                        $phone.attr('placeholder', "请输入手机/邮箱");
                    } else if (idx == 2) {
                        $mainLogin.children('.scancode-login').show().siblings('p').hide();
                    }
                })
                //登录数据提交
                .on('click', '#passportLogin', function() {
                    $.post('../php/login.php', {
                        cellPhone: $phone.val(),
                        password: $password.val()
                    }, function(response) {
                        var data = eval('(' + response + ')');
                        if (data.state) {
                            window.location.href = '../index.html';
                        } else {
                            alert(data.message);
                        }
                    });
                })
                .on('click', 'a.register', function() {
                    console.log('123');
                    window.location.href = 'register.html';
                })
        });
    })
});
