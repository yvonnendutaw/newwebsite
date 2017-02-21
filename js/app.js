$(document).ready(function () {
    $('.slider').slider({
        full_width: true
    });
});
jQuery(document).ready(function ($) {
    //create the slider
    $('.cd-testimonials-wrapper').flexslider({
        selector: ".cd-testimonials > li"
        , animation: "slide"
        , controlNav: true
        , slideshow: false
        , smoothHeight: true
        , start: function () {
            $('.cd-testimonials').children('li').css({
                'opacity': 1
                , 'position': 'relative'
            });
        }
    });
});
$(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
        $('.navbar').css('background', 'white');
    }
    else {
        $('.navbar').css('background', 'transparent');
    }
});
//$(window).scroll(function () {
//            if ($(document).scrollTop() == 0) {
//                $('.title-area img').attr('src', 'img/newnetlogo.png');
//            }
//            else if {
//                ($(document).scrollTop() >= 500) {
//                    $('.title-area img').attr('src', 'img/Netwookie%20Logo%20Horizontal.png');
//                }
//            });