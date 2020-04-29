

$("#NickName").blur(function () {

    var valueNickName = $("#NickName").val();
    if (valueNickName.length < 1) {
        layer.msg('昵称不能为空！', { icon: 5 });
        return;
    }
});
$("#Email").blur(function () {

    var valueEmail = $("#Email").val();
    if (valueEmail.length < 1) {
        layer.msg('邮箱不能为空！', { icon: 5 });
        return;
    }
    var reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    if (!reg.test(valueEmail)) {

        layer.msg('请输入正确的邮箱！', { icon: 5 });
        return;
    }
});
//上传头像显示
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


//提交修改
function Submit() {
    var valueNickName = $("#NickName").val();
    if (valueNickName.length < 1) {
        layer.msg('昵称不能为空！', { icon: 5 });
        return;
    }
    var valueEmail = $("#Email").val();
    if (valueEmail.length < 1) {
        layer.msg('邮箱不能为空！', { icon: 5 });
        return;
    }
    var regemail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    if (!regemail.test(valueEmail)) {

        layer.msg('请输入正确的邮箱！', { icon: 5 });
        return;
    }


    var valuePhone = $("#Phone").val();
    if (valuePhone.length>0) {
        var regphone = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
        if (!regphone.test(valuePhone)) {

            layer.msg('请输入正确的手机号！', { icon: 5 });
            return;
        }
    }
 



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
                if (res.code == 0) {
                    layer.msg(res.msg, { icon: 6 }, function () {
                        location.href = "/Admin/UserInfo";
                    })
                }
                else if(res.code=2){
                    layer.msg(res.msg, { icon: 6 })
                }
                else {
                    layer.msg(res.msg, { icon: 5 })
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