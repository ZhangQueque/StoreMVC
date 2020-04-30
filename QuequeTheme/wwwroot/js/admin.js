

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


function Search() {
    layer.msg("我懒得做了，哈哈哈", { icon: 6 }, function () {
        layer.open({
            type: 2,
            title: false,
            closeBtn: 1, //不显示关闭按钮
            shade: [0],
            area: ['340px', '215px'],
            offset: 'rb', //右下角弹出
            time: 2000, //2秒后自动关闭
            anim: 2,
            content: ['/Admin/Index', 'no'], //iframe的url，no代表不显示滚动条
            end: function () { //此处用于演示
                layer.open({
                    type: 2,
                    title: '别看了，我懒得做了！！！！！',
                    shadeClose: true,
                    shade: false,
                    maxmin: true, //开启最大化最小化按钮
                    area: ['893px', '600px'],
                    content: '/Admin/Index'
                });
            }
        });

    })
}


function ToDetail(productId) {
    layer.open({
        type: 2,
        title: '商品详情',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['693px', '600px'],
        content: '/Home/Detail?productId=' + productId
    });
}




