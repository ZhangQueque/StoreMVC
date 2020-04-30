
function GoBuy(id) {
    layer.confirm('因为这是虚拟物品，当你点击“取消”时订单会变为“未支付状态”；当你点击“购买”时订单会变为“已支付状态”', { icon: 3, title: '购买须知：' }, function (index) {
        if (id == 2) {
            layer.open({
                type: 1,
                title: false,
                closeBtn: 1,
                area: ['auto'],
                skin: 'layui-layer-nobg', //没有背景色
                shadeClose: false,
                content: $('#QQ2'),
            });
        }
        else {
            //do something
            layer.open({
                type: 1,
                title: false,
                closeBtn: 1,
                area: ['auto'],
                skin: 'layui-layer-nobg', //没有背景色
                shadeClose: false,
                content: $('#QQ'),
            });
        }

        layer.close(index);
    });




}

//订单支付
function ToBuy(orderId, status) {
    var token = $.cookie("token");
    var index = layer.load();

    if (status == 0) {
        layer.close(index);
        layer.msg("付款已取消！", { icon: 5 }, function () { layer.closeAll() });

    } else {

        $.ajax({
            url: urlBase + '/api/orders/status1/' + orderId,
            type: 'get',
            headers: { "Authorization": "Bearer " + token },
            contentType: 'application/json',
            success: function (res) {
                layer.close(index);
                if (res.code == 1) {
                    layer.msg("商品已下架，无法支付！", { icon: 5 });
                } else {
                    layer.msg("购买成功！", { icon: 6 }, function () { location.href = "/Admin/UserOrders?cardId=3"; });

                }
            }
        }).fail(function () {
            layer.close(index);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 });
        });
    }

}


//取消订单
function ToStatus4(orderId) {
    var token = $.cookie("token");
    var index2 = layer.load();
    layer.confirm('确定要取消订单吗？', { icon: 3 }, function (index) {
        $.ajax({
            url: urlBase + '/api/orders/status4/' + orderId,
            type: 'get',
            headers: { "Authorization": "Bearer " + token },
            contentType: 'application/json',
            success: function (res) {
                layer.close(index2);
                layer.msg("订单取消成功！", { icon: 6 }, function () { location.href = "/Admin/UserOrders?cardId=1"; });
            }
        }).fail(function () {
            layer.close(index2);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 });
        });
        layer.close(index);
    });


}


//确认收货
function ToStatus3(orderId, id) {
    var token = $.cookie("token");
    var index2 = layer.load();
    layer.confirm('确定要收货吗？', { icon: 3 }, function (index) {
        $.ajax({
            url: urlBase + '/api/orders/status3/' + orderId,
            type: 'get',
            headers: { "Authorization": "Bearer " + token },
            contentType: 'application/json',
            success: function (res) {
                layer.close(index2);
                if (id == 1) {
                    layer.msg("撤销成功！", { icon: 6 }, function () { location.href = "/Admin/UserOrders?cardId=5"; });

                } else {
                    layer.msg("收货成功！", { icon: 6 }, function () { location.href = "/Admin/UserOrders?cardId=5"; });

                }
            }
        }).fail(function () {
            layer.close(index2);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 });
        });
        layer.close(index);
    });


}



//申请退货
function ToStatus5(orderId) {
    var token = $.cookie("token");
    var index2 = layer.load();
    layer.confirm('确定要退货吗？', { icon: 3 }, function (index) {
        $.ajax({
            url: urlBase + '/api/orders/status5/' + orderId,
            type: 'get',
            headers: { "Authorization": "Bearer " + token },
            contentType: 'application/json',
            success: function (res) {
                layer.close(index2);
                layer.msg(res, { icon: 6 }, function () { location.href = "/Admin/UserOrders?cardId=6"; });
            }
        }).fail(function () {
            layer.close(index2);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 });
        });
        layer.close(index);
    });


}




//删除记录
function ToDelete(orderId, id) {
    var token = $.cookie("token");
    var index2 = layer.load();
    layer.confirm('确定要删除记录吗？', { icon: 3 }, function (index) {
        $.ajax({
            url: urlBase + '/api/orders/delete/' + orderId,
            type: 'get',
            headers: { "Authorization": "Bearer " + token },
            contentType: 'application/json',
            success: function (res) {
                layer.close(index2);
                if (id == 1) {
                    layer.msg(res, { icon: 6 }, function () { location.href = "/Admin/OrderAll"; });

                } else {
                    layer.msg(res, { icon: 6 }, function () { location.href = "/Admin/UserOrders?cardId=1"; });

                }
            }
        }).fail(function () {
            layer.close(index2);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 });
        });
        layer.close(index);
    });
}


//发货
function ToStatus2(orderId, id) {
    var token = $.cookie("token");
    var index2 = layer.load();
    layer.confirm('确定要发货吗？', { icon: 3 }, function (index) {
        $.ajax({
            url: urlBase + '/api/orders/status2/' + orderId,
            type: 'get',
            headers: { "Authorization": "Bearer " + token },
            contentType: 'application/json',
            success: function (res) {
                layer.close(index2);
                if (id == 1) {
                    layer.msg("发货成功！", { icon: 6 }, function () { location.href = "/Admin/OrderAll" });

                } else {
                    layer.msg("发货成功！", { icon: 6 }, function () { location.href = "/Admin/OrderShipments" });

                }
            }
        }).fail(function () {
            layer.close(index2);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 });
        });
        layer.close(index);
    });


}


//同意退款
function ToStatus5To4(orderId, id) {
    var token = $.cookie("token");
    var index2 = layer.load();
    layer.confirm('确定要同意退款吗？', { icon: 3 }, function (index) {
        $.ajax({
            url: urlBase + '/api/orders/status4/' + orderId,
            type: 'get',
            headers: { "Authorization": "Bearer " + token },
            contentType: 'application/json',
            success: function (res) {
                layer.close(index2);
                if (id == 1) {
                    layer.msg("退款成功！", { icon: 6 }, function () { location.href = "/Admin/OrderAll"; });

                } else {
                    layer.msg("退款成功！", { icon: 6 }, function () { location.href = "/Admin/OrderRefund"; });

                }
            }
        }).fail(function () {
            layer.close(index2);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 });
        });
        layer.close(index);
    });


}

