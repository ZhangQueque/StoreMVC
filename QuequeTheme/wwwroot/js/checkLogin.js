$(function () {

    var token = sessionStorage.getItem("token");
    if (token == null) {
        this.location.href = "/Account/Login";
    }
    else {
         
    }
})