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
        var nav = document.querySelector('.navbar');

        if (scrollY >= (windowHeight / 2) && show === false) {
            $('.btnTop').fadeIn('fast');
            nav.classList.add('fixed-top');
            show = true;
        } else if (scrollY < (windowHeight / 2) && show === true) {
            $('.btnTop').fadeOut('fast');
             nav.classList.remove('fixed-top');
            show = false;
        }
    });

});