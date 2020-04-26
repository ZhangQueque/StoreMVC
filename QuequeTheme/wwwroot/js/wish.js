$(function () {


})

//收藏
function Heart(productId) {
    var token = $.cookie("token");

    if (token == "null") {
        layer.confirm('您还没有登录，要前往登录吗?', { icon: 3, title: '缺缺：' }, function (index) {
            //do something
            location.href = "/Account/Login";
            layer.close(index);

        });
    }
    else {

        layer.confirm('确定要收藏吗?', { icon: 3, title: '缺缺：' }, function (index) {
            //do something
            var index = layer.load();

             $.ajax({
                url: urlBase + '/api/wishs',
                type: 'post',
                data: JSON.stringify({ ProductId: productId }),
                headers: { "Authorization": "Bearer " + token },
                contentType: 'application/json',
                success: function (res) {
                    if (res.code == 1) {
                        layer.close(index);
                        layer.msg("该商品已经在收藏列表中", { icon: 6 });
                    }
                    else {
                        layer.close(index);
                        layer.msg("收藏成功", { icon: 6 });
                    }
                    layer.close(index);
                }
            }).fail(function () {
                layer.close(index);
                layer.msg("服务器错误，请联系管理员！", { icon: 5 });

            });

            layer.close(index);
        });


    }

};


//收藏删除
function WishDelete(wishId) {

    var token = $.cookie("token");
    layer.confirm('确定要移除吗?', { icon: 3, title: '缺缺：' }, function (index) {
        //do something
        var index = layer.load();

    
        $.ajax({
            url: urlBase + '/api/wishs/delete/' + wishId,
            type: 'get',
            headers: { "Authorization": "Bearer " + token },
            contentType: 'application/json',
            success: function (res) {       
                layer.close(index);

                layer.msg("删除成功！", { icon: 6 });
                location.href = "/Shop/WishList";
            }
        }).fail(function () {
            layer.close(index);

            layer.msg("服务器错误，请联系管理员！", { icon: 5 });

        });

        layer.close(index);
    });

}