

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


function Money() {
    layer.open({
        type: 1,
        title: false,
        closeBtn: 0, //关闭按钮样式
        area: ['auto'],
        skin: 'layui-layer-nobg', //是否有背景色
        shadeClose: true, //是否点击遮罩关闭
        content: $('#Money')
    });
};

function QQ() {
    layer.open({
        type: 1,
        title: false,
        closeBtn: 0, //关闭按钮样式
        area: ['auto'],
        skin: 'layui-layer-nobg', //是否有背景色
        shadeClose: true, //是否点击遮罩关闭
        content: $('#QQ')
    });
};

function JueJin() {
    layer.open({
        type: 1,
        title: false,
        closeBtn: 0, //关闭按钮样式
        area: ['auto'],
        skin: 'layui-layer-nobg', //是否有背景色
        shadeClose: true, //是否点击遮罩关闭
        content: $('#JueJin')
    });
};

function Qun() {
    layer.open({
        type: 1,
        title: false,
        closeBtn: 0, //关闭按钮样式
        area: ['auto'],
        skin: 'layui-layer-nobg', //是否有背景色
        shadeClose: true, //是否点击遮罩关闭
        content: $('#Qun')
    });
};


function ChangeImg() {
    "use strict";
    //var file = $("#File")[0].files[0];
    //var reader = new FileReader();
    //reader.readAsDataURL(file);
    //reader.onload = function (e) {
    //    console.log(e.target.result);
    //    $("#UserImg").attr('src',e.target.result);
    //}


    var reader = new FileReader();//创建一个读流
    var file = $("#fileimg")[0].files[0];//获取选中文件
    reader.readAsDataURL(file);//读文件
    reader.onload = function (e) {//读事件
        $("#UserImg").attr('src', e.target.result);
        //$("#UserImg").attr('src', e.target.result)
    };
}


function Submit() {
    layer.confirm("确定要提交吗？", { icon: 3 }, function (index) {
        var token = $.cookie("token");
        //建立表单对象
        var formData = new FormData($("#FormUserData")[0]); //获取表单数据，切记id
        var index2 = layer.load();
        $.ajax({
            url: urlBase + '/api/users/update',
            type: 'post',
            headers: { "Authorization": "Bearer " + token },
            data: formData,
            cache: false,       //上传文件不需缓存
            processData: false, //需设置为false。因为data值是FormData对象，不需要对数据做处理
            contentType: false, //需设置为false。因为是FormData对象，且已经声明了属性enctype="multipart/form-data"

            success: function (res) {
                layer.close(index2);
                if (res.code == 1) {
                    layer.msg(res.msg, { icon: 5 }, function () {
                        location.href = "/Admin/UserInfo";
                    })
                }
                else {
                    layer.msg(res.msg, { icon: 6 }, function () {
                        location.href = "/Admin/UserInfo";
                    })
                }
            }
        }).fail(function () {

            layer.close(index2);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 }, function () {
                location.href = "/Admin/UserInfo";
            });
        });
        layer.close(index);
    })
} 