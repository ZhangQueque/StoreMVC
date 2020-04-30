function ProductImgChange() {
    "use strict";
 
 

    var reader = new FileReader();//创建一个读流
    var file = $("#Pictrue")[0].files[0];//获取选中文件
    reader.readAsDataURL(file);//读文件
    reader.onload = function (e) {//读事件
        $("#ProductImg").attr('src', e.target.result);
        //$("#UserImg").attr('src', e.target.result)
    };

}

$(function () {
    $.ajax({
        url: urlBase + '/api/cates/parent',
        type: "get",
        contentType: "application/json",
        success: function (res) {
            $("#ParentType").empty();
            $("#ParentType").append('<option >请选择</option>');
            $(res).each(function () {
                var line = '<option value="'+this.id+'">'+this.title+'</option>';
                $("#ParentType").append(line);
            })
         }
    })
})


function GetChildTypes(pid) {
    if (pid == 30) {

        var text = $("#ParentType").val();
        $("#ChildType").empty();
        $("#ChildType").append('<option >请选择</option>');

        $("#ChildType").append('<option  value="30">' + text + '</option>');
        return;

    }
    if (pid == 31) {

        var text = $("#ParentType").val();
        $("#ChildType").empty();
        $("#ChildType").append('<option >请选择</option>');

        $("#ChildType").append('<option  value="31">' + text + '</option>');
        return;

    }
    if (pid == 32) {

        var text = $("#ParentType").val();
        $("#ChildType").empty();
        $("#ChildType").append('<option >请选择</option>');

        $("#ChildType").append('<option  value="32">' + text + '</option>');

        return;
    }
    $.ajax({
        url: urlBase + '/api/cates/child?pid=' + pid,
        type: "get",
        contentType: "application/json",
        success: function (res) {
            $("#ChildType").empty();
            $("#ChildType").append('<option >请选择</option>');

            $(res).each(function () {
                var line = '<option value="' + this.id + '">' + this.title + '</option>';
                $("#ChildType").append(line);
            })
        }
    })
 
}

function Create() {
    layer.confirm("确定要提交吗？", { icon: 3 }, function (index) {
        var token = $.cookie("token");
        //建立表单对象
        var formData = new FormData($("#FormProductData")[0]); //获取表单数据，切记id
        var index2 = layer.load();
        $.ajax({
            url: urlBase + '/api/0/products/create',
            type: 'post',
            headers: { "Authorization": "Bearer " + token },
            data: formData,
            cache: false,       //上传文件不需缓存
            processData: false, //需设置为false。因为data值是FormData对象，不需要对数据做处理
            contentType: false, //需设置为false。因为是FormData对象，且已经声明了属性enctype="multipart/form-data"

            success: function (res) {
                layer.close(index2);
                layer.msg("商品上架成功！", { icon: 6 }, function () {
                    layer.open({
                        type: 2,
                        title: '商品详情',
                        shadeClose: true,
                        shade: false,
                        maxmin: true, //开启最大化最小化按钮
                        area: ['693px', '600px'],
                        content: '/Home/Detail?productId=' + productId,
                        end: function () {
                            location.href = "/Admin/ProductCreate";
                        }
                    });
                })
            }
        }).fail(function () {

            layer.close(index2);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 }, function () {
                location.href = "/Admin/ProductCreate";
            });
        });
        layer.close(index);
    })

}





function Edit() {
    //当你在iframe页面关闭自身时
    var index4 = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引

    layer.confirm("确定要提交修改吗？", { icon: 3 }, function (index) {
        var productId = $("#ProductId").text();
        var token = $.cookie("token");
        //建立表单对象
        var formData = new FormData($("#FormProductDataEdit")[0]); //获取表单数据，切记id
        var index2 = layer.load();
        $.ajax({
            url: urlBase + '/api/0/products/edit/'+productId,
            type: 'post',
            headers: { "Authorization": "Bearer " + token },
            data: formData,
            cache: false,       //上传文件不需缓存
            processData: false, //需设置为false。因为data值是FormData对象，不需要对数据做处理
            contentType: false, //需设置为false。因为是FormData对象，且已经声明了属性enctype="multipart/form-data"

            success: function (res) {
                layer.close(index2);

                layer.msg("信息修改成功成功！", { icon: 6 }, function () {
                    parent.layer.close(index4); //再执行关闭   

                })
            }
        }).fail(function () {

            layer.close(index2);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 }, function () {
                location.href = "/Admin/ProductEdit";
            });
        });
        layer.close(index);
    })

}