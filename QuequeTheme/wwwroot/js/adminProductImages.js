function Image1Change() {
    //ProductImage1   Image1 

    "use strict";



    var reader = new FileReader();//创建一个读流
    var file = $("#Image1")[0].files[0];//获取选中文件
    reader.readAsDataURL(file);//读文件
    reader.onload = function (e) {//读事件
        $("#ProductImage1").attr('src', e.target.result);
        //$("#UserImg").attr('src', e.target.result)
    };
}

function Image2Change() {

    "use strict";



    var reader = new FileReader();//创建一个读流
    var file = $("#Image2")[0].files[0];//获取选中文件
    reader.readAsDataURL(file);//读文件
    reader.onload = function (e) {//读事件
        $("#ProductImage2").attr('src', e.target.result);
        //$("#UserImg").attr('src', e.target.result)
    };
}

function ImageCreate() {
    layer.confirm("确定要提交吗？", { icon: 3 }, function (index) {
        var token = $.cookie("token");
        var productId = $("#ProductId").text();
        //建立表单对象
        var formData = new FormData($("#FormByProductImage")[0]); //获取表单数据，切记id
        var index2 = layer.load();
        $.ajax({
            url: urlBase + '/api/0/products/images/' + productId,
            type: 'post',
            headers: { "Authorization": "Bearer " + token },
            data: formData,
            cache: false,       //上传文件不需缓存
            processData: false, //需设置为false。因为data值是FormData对象，不需要对数据做处理
            contentType: false, //需设置为false。因为是FormData对象，且已经声明了属性enctype="multipart/form-data"

            success: function (res) {
                layer.close(index2);
                layer.msg("图片添加成功！", { icon: 6 }, function () {
                    location.href = "/Admin/ProductImage?productId=" + productId;
                })
            }
        }).fail(function () {

            layer.close(index2);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 }, function () {
                location.href = "/Admin/ProductImage";
            });
        });
        layer.close(index);
    })

}