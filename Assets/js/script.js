// 모바일 페이지 로드시 상단 주소창 숨김
window.addEventListener('load', function (e) {
    $('html').scrollTop(0);
    setTimeout(scrollTo, 0, 0, 1);
}, false);

$(function () {
    console.log('jQuery Load')
    // body 리셋값
    $('body').css({ 'touch-action': 'none', 'overflow': 'hidden', 'background-color': '#141414' });
    // $('.side-remote').hide();

    // 광고창 닫기 버튼
    $('.x').on('click', function () {
        console.log('click');
        $('.shinhan-ad').animate({ height: '-=100vh' }, 1500, 'easeInOutBack', function () {
            $('div').remove('.shinhan-ad');
            $('body').css({ 'padding-top': '100px', 'touch-action': 'auto', 'overflow': 'auto', 'background-color': '#fff' })
            $('header').css({ 'position': 'fixed' })
        });
    });

    // 광고창 닫기 슬라이드 모션 (아래에서 위로)
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

    // 햄버거 이벤트
    $(".ham").click(function (e) {
        e.preventDefault();
        console.log('click')
        $(this).toggleClass("active")
    });

    // 배너 슬라이드 재생 정지
    $(".pause").click(function (e) {
        e.preventDefault();
        console.log('click')
        $(this).toggleClass("active")

        if ($(this).hasClass('active')) {
            swiper.autoplay.stop();
        } else {
            swiper.autoplay.start();
        }
    });

    // 팝업창 닫기
    $('.close-popUp').click(function (e) {
        console.log('click');
        e.preventDefault();
        $('div').remove('.popUp');
    });

    // 메인 슬라이더
    var mySwiper = new Swiper('div.gnb > .swiper-container', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
    });

    // 카드 슬라이더
    var goodSwiper = new Swiper('.card-area .swiper-container', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
    });

    var swiper = new Swiper('.banner-area .swiper-container', {
        loop: true,
        autoplay: {
            delay: 1500
        },
        paginationClickable: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // 사이드 리모트 show/hide
    var sc = window.scrollY;
    $(window).scroll(function () {
        var sc = $(document).scrollTop();
        console.log(sc);
        if (sc < 210) {
            $('.side-remote').hide(500);
        } else { $('.side-remote').show(500) }
    })

    // 사이드 리모트 이동
    $('a.side-remote').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    })


});


