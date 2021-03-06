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
        $('.navbar').css('background', 'rgba(2, 1, 1, 0.7)');
    }
    else {
        $('.navbar').css('background', 'transparent');
    }
});
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 100) {
            $('#logo-img img').css({
                'width': '184px'
                , 'height': '33px'
            }).attr('src', 'img/newnetlogo.png');
        }
        if ($(this).scrollTop() > 100) {
            $('#logo-img img').css({
                'width': '184px'
                , 'height': '60px'
            }).attr('src', 'img/Netwookie%20Logo%20Horizontal.png');
        }
    });
});
$('#trigger').click(function (e) {
    $('#modal1').openModal();
});
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1800);
                return false;
            }
        }
    });
});