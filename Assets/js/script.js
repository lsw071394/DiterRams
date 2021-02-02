$(function () {
    console.log('jQuery Load')
    window.addEventListener('load', function (e) {

        setTimeout(scrollTo, 0, 0, 1);
    }, false);
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

});
