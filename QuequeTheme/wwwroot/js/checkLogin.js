$(function () {

    var token = $.cookie("token");
     
    if (token == "null") {
        layer.msg("请先登录！", { icon: 2 }, function () {
             location.href = "/Account/Login";
        })
    }
    else {
         
    }
})