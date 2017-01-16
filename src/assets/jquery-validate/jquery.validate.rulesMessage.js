$().ready(function() {

    $("form").validate({

        rules: {

            cellPhone: {
                required: true,
                minlength:11

            },

            password: {

                required: true,

                rangelength:[6,12]

            },

            repassword: {

                required: true,

                equalTo: "#password"

            }

        },

        messages: {

            cellPhone: {
                 required: "请输入手机号码",
                 minlength: "手机号码长度为11"
            },

            password: {

                required: "请输入密码",

                minlength: "6到12位，英文+数字"

            },

            repassword: {

                required: "请输入确认密码",

                equalTo: "两次输入密码不一致"

            }

        }

    });

});
