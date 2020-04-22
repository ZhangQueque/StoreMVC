//EmailLogin  PasswordLogin  EmailLoginBtn   sessionStorage.removeItem("token");
var urlBase = "https://localhost:5001/";
//var urlBase = "https://www.zhangqueque.top:5001";

$("#EmailLogin").blur(function () {

    var value = $("#EmailLogin").val();
    var reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    if (!reg.test(value)) {

        layer.msg('请输入正确的邮箱！', { icon: 5 });
        return;
    }
});

$("#PasswordLogin").blur(function () {

    var value = $("#PasswordLogin").val();
    if (value.length < 6) {
        layer.msg('密码不能小于6位！', { icon: 5 });
        return;
    }
});

$("#EmailLoginBtn").click(function () {
    var email = $("#EmailLogin").val();
    var password = $("#PasswordLogin").val();
    var reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    if (!reg.test(email)) {

        layer.msg('请输入正确的邮箱！', { icon: 5 });
        return;
    }
    if (password.length < 6) {
        layer.msg('密码不能小于6位！', { icon: 5 });
        return;
    }
    var index = layer.load();
    $.ajax({
        url: urlBase + '/api/accounts/email',
        type: 'post',
        data: JSON.stringify({ Email: email, Password: password }),
        contentType: 'application/json',
        success: function (res) {
            layer.close(index);   
            sessionStorage.setItem("token", res.token);
            layer.msg('登录成功！', { icon: 6 }, function () { location.href = "/Home/Index" });

        }
    }).fail(function () {
        layer.msg('服务器错误，请联系管理员！', { icon: 5 });
    });
});

//EmailRegister PasswordRegister  ConfirmPassword   EmailRegisterBtn

$("#EmailRegister").blur(function () {

    var value = $("#EmailRegister").val();
    var reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    if (!reg.test(value)) {

        layer.msg('请输入正确的邮箱！', { icon: 5 });
        return;
    }
});

$("#PasswordRegister").blur(function () {

    var value = $("#PasswordRegister").val();
    if (value.length < 6) {
        layer.msg('密码不能小于6位！', { icon: 5 });
        return;
    }
});

$("#ConfirmPassword").blur(function () {

    var value = $("#PasswordRegister").val();
    var value2 = $("#ConfirmPassword").val();
    if (value != value2) {
        layer.msg('俩次密码输入不一致！', { icon: 5 });
        return;
    }
});


$("#EmailRegisterBtn").click(function () {
    var email = $("#EmailRegister").val();
    var password = $("#PasswordRegister").val();
    var reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    if (!reg.test(email)) {

        layer.msg('请输入正确的邮箱！', { icon: 5 });
        return;
    }
    if (password.length < 6) {
        layer.msg('密码不能小于6位！', { icon: 5 });
        return;
    }
    var index = layer.load();
    $.ajax({
        url: urlBase + '/api/accounts/register',
        type: 'post',
        data: JSON.stringify({ Email: email, Password: password }),
        contentType: 'application/json',
        success: function (res) {
            layer.close(index);  
            if (res.code == 1) {
                layer.msg('账号已经存在！请重新注册！', { icon: 5 });
                return;
            }
            if (res.code == 0) {
                sessionStorage.setItem("token", res.token);
                layer.msg('注册成功！', { icon: 6 }, function () { location.href = "/Home/Index" });
            }
        }
    }).fail(function () {
        layer.msg('服务器错误，请联系管理员！', { icon: 5 });
    });
});


//PhoneLogin  CodeLogin  GetCodeBtn PhoneLoginBtn



$("#PhoneLogin").blur(function () {

    var value = $("#PhoneLogin").val();
    var reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
    if (!reg.test(value)) {

        layer.msg('请输入正确的手机号！', { icon: 5 });
        return;
    }
});

$("#CodeLogin").blur(function () {

    var value = $("#CodeLogin").val();
    if (value.length < 1) {
        layer.msg('验证码不能为空！', { icon: 5 });
        return;
    }
});

$("#GetCodeBtn").click(function () {

    var value = $("#PhoneLogin").val();
    if (value.length < 1) {
        layer.msg('手机号不能为空！', { icon: 5 });
        return;
    }

    var index = layer.load();
    $.ajax({
        url: urlBase + '/api/accounts?phone=' + value,
        type: 'get',
        contentType: 'application/json',
        success: function (res) {     
            layer.close(index);
            layer.msg(res, { icon: 6 });   
        }
    }).fail(function () {
        layer.msg('服务器错误，请联系管理员！', { icon: 5 });
    });

});

$("#PhoneLoginBtn").click(function () {
    var phone = $("#PhoneLogin").val();
    var code = $("#CodeLogin").val();
    var reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
    if (!reg.test(phone)) {

        layer.msg('请输入正确的手机号！', { icon: 5 });
        return;
    }
    if (code.length < 1) {
        layer.msg('验证码不能为空！', { icon: 5 });
        return;
    }
    var index = layer.load();
    $.ajax({
        url: urlBase + '/api/accounts/phone',
        type: 'post',
        data: JSON.stringify({ Phone: phone, Code: code }),
        contentType: 'application/json',
        success: function (res) {
            layer.close(index);
            if (res.code == 1) {
                layer.msg('验证码已过期！请重新获取！', { icon: 5 });
                return;
            }
            if (res.code == 0) {
                sessionStorage.setItem("token", res.token);
                layer.msg('验证成功！', { icon: 6 }, function () { location.href = "/Home/Index" });
            }
        }
    }).fail(function () {
        layer.msg('服务器错误，请联系管理员！', { icon: 5 });
    });
});


//$.ajax({
//    url: '',
//    type: '',
//    data: JSON.stringify({}),
//    contentType: 'application/json',
//    success: function (res) {

//    }
//}).fail(function () {

//});