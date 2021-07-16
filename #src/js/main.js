'use strict'

$(document).ready(function () {

    /* Works slider */
    $('.js-works-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 618,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });

    /* our-team slider */
    $('.js-our-team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        touchThreshold: 30,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }).on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    }).on('beforeChange', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });

    /* Smooth scroll to elem */
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        let targetAnchor = $(this).attr('href');

        if (targetAnchor !== "#") {
            let $targetElement = $(targetAnchor);

            if ($targetElement.length) {
                $('html, body').animate({
                    scrollTop: $targetElement.offset().top
                }, 700);
            }
        }
    });

    $( window ).on( 'scroll', function() {

        if ($(this).scrollTop() > 120) {
            $('.header').addClass('sticked');
        } else {
            $('.header').removeClass('sticked');
        }
    } );


}); // End of document ready