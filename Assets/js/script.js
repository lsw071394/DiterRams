
window.addEventListener('load', function (e) {

    setTimeout(scrollTo, 0, 0, 1);
}, false);

$(function () {
    console.log('jQuery Load')

    $('body').css({ 'touch-action': 'none', 'overflow': 'hidden', 'background-color': '#141414' });

    $(".ham").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active")
    });

    var mySwiper = new Swiper('div.gnb > .swiper-container', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    })

    var goodSwiper = new Swiper('.card-area .swiper-container', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    })


    $('.close-popUp').click(function (e) {
        console.log('click');
        e.preventDefault();
        $('div').remove('.popUp');
    })

    $('a.side-remote').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    })


    $('.x').on('click', function () {
        console.log('click');
        $('.shinhan-ad').animate({ height: '-=100vh' }, 1500, 'easeInOutBack', function () {
            $('div').remove('.shinhan-ad');
            $('body').css({ 'padding-top': '100px', 'touch-action': 'auto', 'overflow': 'auto', 'background-color': '#fff' })
            $('header').css({ 'position': 'fixed' })

        });

    });

    var sc = window.scrollY;



    $(window).scroll(function () {
        var sc = $(document).scrollTop();
        console.log(sc);
        if (sc < 210) {
            $('.side-remote').hide(500);
        } else { $('.side-remote').show(500) }
    })



    var startX, startY, endX, endY;
    $(".shinhan-ad").on('touchstart', function (event) {
        startX = event.originalEvent.changedTouches[0].screenX;
        startY = event.originalEvent.changedTouches[0].screenY;
    });
    $(".shinhan-ad").on('touchend', function (event) {
        endX = event.originalEvent.changedTouches[0].screenX;
        endY = event.originalEvent.changedTouches[0].screenY;
        if (startY - endY > 50) {
            $('.shinhan-ad').animate({ height: '-=100vh' }, 1500, 'easeInOutBack', function () {
                $('div').remove('.shinhan-ad');
                $('body').css({ 'padding-top': '100px', 'touch-action': 'auto', 'overflow': 'auto', 'background-color': '#fff' })
                $('header').css({ 'position': 'fixed' })
            });
        }
    });

});


