$(function () {
    $('.menu-toggle-icon>input[type=checkbox]').change(function () {
        $(".sidebar").toggleClass("hide").toggleClass("show");
    });

    $(".link-image").click(function () {
        $(".dropdown").toggle();
    });

    $(".close").click(function () {
        $(this).parent().toggle();
    });

    $(".search-box input[type='text']").click(function () {
        $(".wrapper").hide(50);
        $(".menu-wrapper").addClass("search");
        $(".sidebar").addClass("hide");
    });

});
