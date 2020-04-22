$(function () {
    $("#RegisterDiv").hide();

    $("#PhoneDiv").hide();
})
$("#ShowRefisterDiv").click(function () {
    $("#LoginDiv").hide();
    $("#RegisterDiv").fadeIn(4000);
});

$("#ShowPhoneDiv").click(function () {
    $("#LoginDiv").hide();
    $("#PhoneDiv").fadeIn(4000);
});
$("#ShowPhoneDiv2").click(function () {
    $("#LoginDiv").hide();
    $("#RegisterDiv").hide();
    $("#PhoneDiv").fadeIn(4000);
});
$("#ShowLoginDiv2").click(function () {
    $("#LoginDiv").fadeIn(4000);
    $("#RegisterDiv").hide();
    $("#PhoneDiv").hide();
});
$("#ShowLoginDiv").click(function () {
    $("#LoginDiv").fadeIn(4000);
    $("#RegisterDiv").hide();
    $("#PhoneDiv").hide();
});