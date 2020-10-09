$(document).ready(function(){
    $('.js--section-welcome').waypoint(function(direction){
        if (direction == 'down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    });

    $('.js--menu').click(function(){
        var nav = $('.js--main-nav');
        var menu = $('.menu-outline');
        var close = $('.close-outline');

        nav.slideToggle(200);
    });

});
