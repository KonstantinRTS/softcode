$ = jQuery;
$(document).ready(function () {

    $('.marquee-slider-first').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 18000,
        cssEase: 'linear'
    });

    $('.marquee-slider-second').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 18000,
        cssEase: 'linear'
    });

    $('.marquee-slider-third').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 18000,
        cssEase: 'linear'
    });

    $('.home-create-slider').slick({
        arrows: true,
        appendArrows: '.home-create-slider__buttons',
        prevArrow: '.home-create-slider__btn-prev',
        nextArrow: '.home-create-slider__btn-next',
        slidesToShow: 4,
        dots: false,
        speed: 800,
        autoplay: false,
        autoplaySpeed: 1200,
        variableWidth: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            },
        ]
    });

    if (window.innerWidth <= 992) {

        $('.home-welcome-slider').slick({
            arrows: true,
            appendArrows: '.home-welcome-slider__buttons',
            prevArrow: '.home-welcome-slider__btn-prev',
            nextArrow: '.home-welcome-slider__btn-next',
            slidesToShow: 1,
            dots: false,
            speed: 800,
        });

        $('.home-stack-slider').slick({
            arrows: true,
            appendArrows: '.home-stack-slider__buttons',
            prevArrow: '.home-stack-slider__btn-prev',
            nextArrow: '.home-stack-slider__btn-next',
            slidesToShow: 1,
            dots: false,
            speed: 800,
        });
    }

    /* Проверяю есть ли на странице такая секция и фиксирую её */
    if ($('.home-welcome__col-01').length > 0) {

        var $qwerty = $('._fixed-block');
        var $col01 = $('.home-welcome__col-01');
        var col01Height = $col01.height();
        var qwertyHeight = $qwerty.height();

        $(window).scroll(function () {
  
            if (window.innerWidth > 992) {
                var scrollPosition = $(this).scrollTop();

                if (scrollPosition >= $col01.offset().top && scrollPosition <= ($col01.offset().top + col01Height - qwertyHeight)) {
                    $qwerty.css({
                        'position': 'fixed',
                        'top': '0px',
                        'left': 'auto',
                        'bottom': 'auto'
                    });
                } else if (scrollPosition > ($col01.offset().top + col01Height - qwertyHeight)) {
                    $qwerty.css({
                        'position': 'absolute',
                        'top': 'auto',
                        'left': '0',
                        'bottom': '0'
                    });
                } else {
                    $qwerty.css({
                        'position': 'static',
                        'top': 'auto',
                        'left': 'auto',
                        'bottom': 'auto'
                    });
                }
            } else {

                $qwerty.css({
                    'position': 'static',
                    'top': 'auto',
                    'left': 'auto',
                    'bottom': 'auto'
                });
            }
        });
    }

});