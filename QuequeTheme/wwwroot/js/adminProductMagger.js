
//弹出修改页面
function EditContnt(productId) {
    layer.open({
        type: 2,
        title: '商品编辑',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['693px', '600px'],
        content: '/Admin/ProductEdit?productId=' + productId,
        end: function () {
            location.href="/Admin/ProductMagger";
        }
    });
}


//更改商品状态
function ToProductStatus(  productId) {

    layer.prompt({ title: '输入密钥，并确认', formType: 1 }, function (pass, index) {

        layer.confirm('确定要执行操作吗?', { icon: 3 }, function (index) {
            var token = $.cookie("token");
            var index2 = layer.load();

            $.ajax({
                url: urlBase + '/api/0/products/status/' + productId + "?key=" + pass,
                type: 'get',
                 headers: { "Authorization": "Bearer " + token },
                contentType: 'application/json',
                success: function (res) {
                    layer.close(index2);
                    layer.msg("修改成功！", { icon: 6 });
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


