'use strict'

$(document).ready(function () {

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

    /* our-team slider */
    $('.js-our-team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }).on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    }).on('beforeChange', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });


    /* Works slider */
    $('.js-works-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    })

}); // End of document ready