$(function () {
    var read = document.querySelector('.readMore');
    var info = document.querySelector('.headerText h3');
    read.addEventListener('click', function (event) {
        var show = false;
        if (show == false) {
            info.innerHTML = 'SHineX- это человек который стал популярным благодаря своему ютуб каналу. Сейчас он закончил карьеру видеоблоггера и заинтересовался языками, но не простыми, а языками программирования. Если говорить по подробнее то Шайнекс это обычный подросток который в свои 12 лет создал свой ютуб канал. Канал был изначально назван SHineX LTE и он развился довольно быстро. По началу Шайнекс снимал летсплеи по играм но потом... Шайнекс поменял рубрику и начал снимать разные скетчи и вскоре его ютуб канал занял топовое месте в его стране (Узбекистан)';
            show == true;
            read.innerHTML = '&darr;'
            read.style.borderRadius = '20px';
            info.classList.add('small');
        } else if (show = true) {
            show == false;
            info.innerHTML = 'SHineX- это человек который стал популярным благодаря своему ютуб каналу. Сейчас он закончил карьеру видеоблоггера и заинтересовался языками, но не простыми, а языками программирования.';
            read.innerHTML = 'Читать дальше';
        }

    })
    console.log(window.scrollY);
    
   $('.n-seti').click(function() {
        $('html').animate({
            scrollTop: 656
        }, 700);
   });
      $('.n-videos').click(function () {
          $('html').animate({
              scrollTop: 1319
          }, 700);
      });

        $('.n-contact').click(function () {
            $('html').animate({
                scrollTop: 2237
            }, 700);
        });
      

});