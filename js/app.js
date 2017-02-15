function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
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