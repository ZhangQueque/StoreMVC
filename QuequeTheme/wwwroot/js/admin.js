
function Logout() {
    layer.confirm('确定要注销吗?', { icon: 3, title: '缺缺：' }, function (index) {
        //do something
        var token = $.cookie("token");
        var index2 = layer.load();
        $.ajax({
            url: urlBase + '/api/users/logout',
            type: 'get',
            headers: { "Authorization": "Bearer " + token },

            contentType: 'application/json',
            success: function (res) {
                layer.close(index2);
                layer.msg("注销成功！", { icon: 1 }, function () {
                    $.cookie("token", null, { path: '/' });

                    location.href = "/Home/Index";

                })

            }
        }).fail(function () {

            layer.close(index2);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 }, function () {
                location.href = "/Home/Index";

            })
        });


        layer.close(index);
    });

}
function AlertMsg(msg) {
    layer.alert(msg);
}