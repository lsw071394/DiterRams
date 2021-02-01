$(function () {
    console.log('jQuery Load')
    window.addEventListener('load', function () {
        setTimeout(scrollTo, 0, 0, 1);
    }, false);
    $(".ham").click(function () {
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

    $('.close-popUp').click(function () {
        console.log('click');
        $('div').remove('.popUp');
    })

});
