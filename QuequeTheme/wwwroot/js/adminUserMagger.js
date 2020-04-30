
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

//弹出角色管理页面
function RoleMagger() {
    layer.open({
        type: 2,
        title: '分配角色',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['400px', '446px'],
        content: '/Admin/RoleMagger',
        end: function () {
            location.href = "/Admin/UserMagger";
        }
    });
}

function UserToRole() {
    var userId = $("#UserId").val();
    var roleId = $("#RoleId").val();
    //当你在iframe页面关闭自身时
    var index4 = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
    layer.prompt({ title: '输入密钥，并确认', formType: 1 }, function (pass, index) {

        var token = $.cookie("token");
        var index2 = layer.load();
        layer.confirm('确定要分配角色吗？', { icon: 3 }, function (index) {
            $.ajax({
                url: urlBase + '/api/users/userToRole?userId=' + userId + "&roleId=" + roleId + "&key=" + pass,
                type: 'get',
                headers: { "Authorization": "Bearer " + token },
                contentType: 'application/json',
                success: function (res) {
                    layer.close(index2);
                    if (res.code == 1) {
                        layer.msg(res.msg, { icon: 5}, function () {
                            parent.layer.close(index4); //再执行关闭   

                        })
                    } else {
                        layer.msg(res.msg, { icon: 6 }, function () {
                            parent.layer.close(index4); //再执行关闭   

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



$(function () {
    var token = $.cookie("token");

    $.ajax({
        url: urlBase + '/api/users/all',
        type: "get",
        contentType: "application/json",
        headers: { "Authorization": "Bearer " + token },

        success: function (res) {
            $("#UserId").empty();
            $("#UserId").append('<option >请选择</option>');
            $(res).each(function () {
                var line = '<option value="' + this.id + '">' + this.nickName + '</option>';
                $("#UserId").append(line);
            })
        }
    })

    $.ajax({
        url: urlBase + '/api/users/role/all',
        type: "get",
        contentType: "application/json",
        headers: { "Authorization": "Bearer " + token },

        success: function (res) {
            $("#RoleId").empty();
            $("#RoleId").append('<option >请选择</option>');
            $(res).each(function () {
                var line = '<option value="' + this.id + '">' + this.name + '</option>';
                $("#RoleId").append(line);
            })
        }
    })
  
})
