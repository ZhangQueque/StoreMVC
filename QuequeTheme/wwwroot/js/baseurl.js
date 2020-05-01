var urlBase = "https://localhost:5001";
//var urlBase = "https://www.zhangqueque.top:5001";

$(function () {
    var token = $.cookie("token");
    $.ajax({
        url: urlBase + '/api/users/view',
        type: 'get',
         contentType: 'application/json',
        success: function (res) {
           
         }
    }).fail(function () {
 
    });
    if (token != undefined) {
        if (token != "null") {
            onCommonDataLoad();
        }
    }
   
 
})


function onCommonDataLoad() {
    var token = $.cookie("token");
    var index = layer.load();
    $.ajax({
        url: urlBase + '/api/users',
        type: 'get',
        headers: { "Authorization": "Bearer " + token },
        contentType: 'application/json',
        success: function (res) {
            $("#NickNameNav").text(res.nickName);
            $("#WishCount").text(res.wishCount);
            $("#CartCount").text(res.cartCount);
            layer.close(index);
        }
    }).fail(function () {
        layer.close(index);
        layer.msg("身份验证已过期，请重新登录！", { icon: 5 }, function () {
            $.cookie("token", null, { path: '/' });

            location.href = "/Account/Login";
        });
    });
}


