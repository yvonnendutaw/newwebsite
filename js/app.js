$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});
$('.collapsible').collapsible();
$('body').on('click', '.button-collapse', function () {
    window.alert('too bad :(. This event will never be triggered because the sideNav is stopping propagation.');
});
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
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn(500);
        }
        else {
            $('.navbar').fadeOut(500);
        }
    });
});