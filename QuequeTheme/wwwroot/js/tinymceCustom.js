tinymce.init({
    selector: '#mytextarea',
    language: 'zh_CN',
    menu: {
        my1: { title: '我的菜单', items: 'copy paste' }
    },
    statusbar: false,
    width: 791,
    height: 450,
    plugins: ['print', 'searchreplace', 'quickbars', 'link', 'table', 'code', 'codesample', 'emoticons', 'pagebreak', 'hr', 'preview', 'lists, advlist'], //选择需加载的插件

    //博客编辑栏
    toolbar: [
        'undo |redo  |searchreplace | blockquote |pagebreak| hr |removeformat| code|styleselect |fontselect|fontsizeselect',
        ' indent |underline |strikethrough  |forecolor |emoticons |alignleft |aligncenter | alignright | alignjustify |bullist numlist|  link  |quickimage | table | codesample  |preview |print '
    ],

    //聊天工具栏
    //toolbar: 'emoticons | forecolor  | quickimage | codesample |fontselect |fontsizeselect ',

    menubar: false, //隐藏菜单栏(false隐藏)

    //skin: 'oxide-dark',
    //inline: true, //开启内联模式
    //toolbar: true, //隐藏工具栏
    //media_live_embeds: true,
    //选中时出现的快捷工具，与插件有依赖关系
    quickbars_selection_toolbar: 'bold italic forecolor  backcolor | link blockquote quickimage | codesample',
});

function GetTextarea() {
    var productId = $("#ProductId").text();
    if (productId==0) {
        layer.msg("您还没有选择商品，没法发步哦！", { icon: 5 });
        return;
    }
    var cnt = tinyMCE.editors["mytextarea"].getContent();


    layer.confirm('确定要提交吗?', { icon: 3 }, function (index) {
        var token = $.cookie("token");
        var index2 = layer.load();

        $.ajax({
            url: urlBase + '/api/0/products/blog/' + productId,
            type: 'post',
            data: JSON.stringify({ Content: cnt }),
            headers: { "Authorization": "Bearer " + token },
            contentType: 'application/json',
            success: function (res) {
                layer.close(index2);
                layer.msg("提交成功！", { icon: 6 }, function () {
                    layer.open({
                        type: 2,
                        title: '商品详情',
                        shadeClose: true,
                        shade: false,
                        maxmin: true, //开启最大化最小化按钮
                        area: ['693px', '600px'],
                        content: '/Home/Detail?productId=' + productId,
                        end: function () {
                            location.href = "/Admin/ProductBlog";
                        }
                    });

                });
            }
        }).fail(function () {
            layer.close(index2);
            layer.msg("服务器错误，请联系管理员！", { icon: 5 });

        });
        layer.close(index);
    });
}