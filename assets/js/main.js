$(document).ready(function ($) {
    "use strict";

    // WOW Js Active
    new WOW().init();

    // ---- Active
    $('.quote-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $('.our-client').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3800,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $(window).scroll(function () {
        var scrollSize = $(this).scrollTop();
        if (scrollSize < 50) {
            $('.top').hide();
            $('.navbar').removeClass('bg-light');
            $('.logo.h2').css("font-size", "42px");
        } else {
            $('.top').show();
            $('.navbar').addClass('bg-light');
            $('.logo.h2').css("font-size", "30px");
        }
    });


}(jQuery));