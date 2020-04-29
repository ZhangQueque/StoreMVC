
//修改密码
function PasswordSubmit() {

    var oldPassword = $("#OldPassword").val();
    if (oldPassword.length < 1) {
        layer.msg('原密码不能为空！', { icon: 5 });
        return;
    }

    var newPassword = $("#NewPassword").val();
    if (newPassword.length < 1) {
        layer.msg('新密码不能为空！', { icon: 5 });
        return;
    }

    var newPassword2 = $("#NewPassword2").val();
    if (newPassword2.length < 1) {
        layer.msg('重新输入不能为空！', { icon: 5 });
        return;
    }

    if (newPassword != newPassword2) {
        layer.msg('俩次密码输入不一致！', { icon: 5 });
        return;
    }

    layer.confirm("确认要修改吗？", { icon: 3 }, function (index) {

        var token = $.cookie("token");
        var index2 = layer.load();

        $.ajax({
            url: urlBase + '/api/users/pwd',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({ OldPassword: oldPassword, NewPassword: newPassword }),
            headers: { "Authorization": "Bearer " + token },
            success: function (res) {
                layer.close(index2);
                if (res.code == 1) {
                    layer.msg(res.msg, { icon: 5 });
                }
                else {
                    layer.msg(res.msg, { icon: 6 }, function () {
                        location.href = "/Admin/UserSecurity";
                    });

                }
            }


        }).fail(function () {
            layer.close(index2);

            layer.msg('服务器错误，更改失败，请联系管理员！', { icon: 5 });

        });
        layer.close(index);
    })
}


//取消手机绑定
function UpdatePhone() {
    layer.confirm("确认要取消绑定吗？", { icon: 3 }, function (index) {

        var token = $.cookie("token");
        var index2 = layer.load();

        $.ajax({
            url: urlBase + '/api/users/updatePhone',
            type: 'get',
            contentType: 'application/json',
            headers: { "Authorization": "Bearer " + token },
            success: function (res) {
                layer.close(index2);
                layer.msg(res.msg, { icon: 6 }, function () {
                    location.href = "/Admin/UserSecurity";
                });
            }
        }).fail(function () {
            layer.close(index2);

            layer.msg('服务器错误，更改失败，请联系管理员！', { icon: 5 });

        });
        layer.close(index);
    })
}