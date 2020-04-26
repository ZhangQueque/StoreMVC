//var urlBase = "https://localhost:5001";
var urlBase = "https://www.zhangqueque.top:5001";

$(function () {
    var index = layer.load();
    var token = $.cookie("token");
    if (token!="null") {
        $.ajax({
            url: urlBase + '/api/users',
            type: 'get',
            headers: { "Authorization": "Bearer " + token },
            contentType: 'application/json',
            success: function (res) {
                console.log(res);
                $("#NickNameNav").text(res.nickName);
               
                res.wishCount;
                res.cartCount;
                layer.close(index);
            }
        }).fail(function () {
            layer.close(index);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 });

        });
    }
 
})