$(".mail-btn").on("click touchstart", function () {
    $(this).addClass("fly");
    that = this
    setTimeout(function () {
        $(that).removeClass("fly");
    }, 5400)
});


$(function () {

    $('.btnTop')
        .hide()
        .click(function () {
            $('html').animate({
                scrollTop: 0
            }, 700);
        });


    var show = false;
    $(window).scroll(function () {
        var windowHeight = $(window).innerHeight();

        if (scrollY >= (windowHeight / 2) && show === false) {
            $('.btnTop').fadeIn('fast');
            show = true;
        } else if (scrollY < (windowHeight / 2) && show === true) {
            $('.btnTop').fadeOut('fast');
            show = false;
        }
    });

});