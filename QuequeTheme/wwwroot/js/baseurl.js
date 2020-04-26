﻿//var urlBase = "https://localhost:5001";
var urlBase = "https://www.zhangqueque.top:5001";

$(function () {
    var token = $.cookie("token");
    if (token != undefined) {
        if (token != "null") {
            var index = layer.load();

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
 
            });
        }
    }
   
 
})