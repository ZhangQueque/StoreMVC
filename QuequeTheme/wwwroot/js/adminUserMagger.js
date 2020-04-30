
//更爱用户状态
function ToUserStatus(userId) {
    layer.prompt({ title: '输入密钥，并确认', formType: 1 }, function (pass, index) {

        var token = $.cookie("token");
        var index2 = layer.load();
        layer.confirm('确定要执行操作吗？', { icon: 3 }, function (index) {
            $.ajax({
                url: urlBase + '/api/users/status/' + userId + "?key=" + pass,
                type: 'get',
                headers: { "Authorization": "Bearer " + token },
                contentType: 'application/json',
                success: function (res) {
                    layer.close(index2);
                    if (res.code == 1) {
                        layer.msg(res.msg, { icon: 2 }, function () {
                            location.href = "/Admin/UserMagger";
                        })
                    } else {
                        layer.msg(res.msg, { icon: 1 }, function () {
                            location.href = "/Admin/UserMagger";
                        })
                    }
           
                }
            }).fail(function () {
                layer.close(index2);
                layer.msg("服务器错误，请联系管理员！", { icon: 5 });
            });
            layer.close(index);
        });


         
        layer.close(index);        
    });
}


//强制注销
function ToUserLogOut(userId){
    layer.prompt({ title: '输入密钥，并确认', formType: 1 }, function (pass, index) {

        var token = $.cookie("token");
        var index2 = layer.load();
        layer.confirm('确定要强制下线吗？', { icon: 3 }, function (index) {
            $.ajax({
                url: urlBase + '/api/users/logout/' + userId + "?key=" + pass,
                type: 'get',
                headers: { "Authorization": "Bearer " + token },
                contentType: 'application/json',
                success: function (res) {
                    layer.close(index2);
                    if (res.code==1) {
                        layer.msg(res.msg, { icon: 2 }, function () {
                            location.href = "/Admin/UserMagger";
                        })
                    } else {
                        layer.msg(res.msg, { icon: 1 }, function () {
                            location.href = "/Admin/UserMagger";
                        })
                    }
                 

                }
            }).fail(function () {
                layer.close(index2);
                layer.msg("服务器错误，请联系管理员！", { icon: 5 });
            });
            layer.close(index);
        });

        layer.close(index);
    });
}