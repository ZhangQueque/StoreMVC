//加入购物车
function InsertCart(productId) {

    
    var token = $.cookie("token");

    if (token == "null") {
        layer.confirm('您还没有登录，要前往登录吗?', { icon: 3, title: '缺缺：' }, function (index) {
            //do something
            location.href = "/Account/Login";
            layer.close(index);

        });
    }
    else {
        var num = $("#Number").val();
        var size = $("#Size:checked").val();
        layer.confirm('确定要加入购物车吗?', { icon: 3, title: '缺缺：' }, function (index) {
            //do something
            var index = layer.load();
            $.ajax({
                url: urlBase + '/api/carts',
                type: 'post',
                data: JSON.stringify({ ProductId: productId, Count: parseInt(num), Size: size}),
                headers: { "Authorization": "Bearer " + token },
                contentType: 'application/json',
                success: function (res) {
                    layer.close(index);
                        layer.msg("加入购物车成功", { icon: 6 });                   
                }
            }).fail(function () {
 
                layer.close(index);

                layer.msg("服务器错误，请联系管理员！", { icon: 5 });

            });

            layer.close(index);
        });


    }
}


//购物车删除
function CartDelete(cartId) {
    var token = $.cookie("token");
    layer.confirm('确定要移除吗?', { icon: 3, title: '缺缺：' }, function (index) {
        //do something
        var index = layer.load();
 
        $.ajax({
            url: urlBase + '/api/carts/' + cartId,
            type: 'delete',
            headers: { "Authorization": "Bearer " + token },
            contentType: 'application/json',
            success: function (res) {
                layer.close(index);

                layer.msg("删除成功！", { icon: 6 });
                location.href = "/Shop/CartList";
            }
        }).fail(function () {
            layer.close(index);

            layer.msg("服务器错误，请联系管理员！", { icon: 5 });
        });

        layer.close(index);
    });
}


function GoBuy() {
    layer.confirm('因为这是虚拟物品，当你点击“取消”时订单会变为“未支付状态”；当你点击“购买”时订单会变为“已支付状态”', { icon: 3, title: '购买须知：' }, function (index) {
        //do something
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            area: ['auto'],
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: false,
            content: $('#QQ'),
            cancel: function (index) {
                layer.close(index);
                location.href = "/Shop/CartList";
            }  
        });
        layer.close(index);
    });
    
     
    

} 

//购买
function ToBuy(productId, status, count,cartId) {
    var price = parseFloat( $("#TotalPrice").text());
    var token = $.cookie("token");
    var index = layer.load();

 
    $.ajax({
        url: urlBase + '/api/orders',
        type: 'post',
        data: JSON.stringify({ ProductId: productId, Count: parseInt(count), TotalPrices: price, Status: status }),
        headers: { "Authorization": "Bearer " + token },
        contentType: 'application/json',
        success: function (res) {

            $.ajax({
                url: urlBase + '/api/carts/' + cartId,
                type: 'delete',
                headers: { "Authorization": "Bearer " + token },
                contentType: 'application/json',
                success: function (res) {
                    if (status == 0) {
                        layer.close(index);
                        layer.msg("付款已取消！请前往订单支付", { icon: 5 }, function () { location.href = "/Shop/CartList";});

                    } else {
                        layer.close(index);
                        layer.msg("购买成功！", { icon: 6 }, function () { location.href = "/Shop/CartList"; });
                    }
                   
                }
            }).fail(function () {
                layer.close(index);
                layer.msg("服务器错误，请联系管理员！", { icon: 5 });
            });
            layer.close(index);
        }
    }).fail(function () {
        layer.close(index);
        layer.msg("服务器错误，请联系管理员！", { icon: 5 });

    }); 
}
