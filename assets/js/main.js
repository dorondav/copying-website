$(document).ready(function () {
    var navOffSet = $("nav").offset().top;

    $(window).scroll(function () {
        var nav = $(window).scrollTop();
        $(".cover").html(nav);
    });
});