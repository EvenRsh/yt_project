$().ready(function() {

    $("form").validate({

        rules: {

            cellPhone: "required",

            password: {

                required: true,

                rangelength:[6,12]

            },

            rePassword: {

                required: true,

                rangelength:[6,12],

                equalTo: "#password"

            }

        },

        messages: {

            cellPhone: "请输入手机号码",



            password: {

                required: "请输入密码",

                minlength: jQuery.format("6到12位，英文+数字")

            },

            rePassword: {

                required: "请输入确认密码",

                minlength: "确认密码不能小于5个字符",

                equalTo: "两次输入密码不一致"

            }

        }

    });

});
