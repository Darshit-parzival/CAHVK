$(document).ready(function() {


    $('.nav-links a').each(function() {
        if ($(this).attr('href') === location.pathname.split("/")[1]) {
            var $this = $(this);
            $this.parent().siblings('li').removeClass('current-link');
            $this.parent().addClass('current-link');
            $this.on('click', function(e) {
                e.preventDefault();
            });

            var linkColor = $(this).parent().css('background-color');

            $('.content').css( {
                'border-color' : linkColor
            });



        } 
        
    });
    
    if (location.pathname.split("/")[1] === 'index.html') {
        $('.nav-links').hover(function () {
            var $color = $(this).css('background-color');
            
            $('.content').css({
                'border-color' : $color
            });
        });
    }

    if (location.pathname.split("/")[1] === '') {
        $('.nav-links').hover(function () {
            var $color = $(this).css('background-color');
            
            $('.content').css({
                'border-color' : $color
            });
        });
    }

    $('#menu-link').on('click', function(e) {
        e.preventDefault();
        $('nav').toggleClass('activate');
    });

    $('.extend-break h1').on('click', function() {
        $('#home-newsletter').slideToggle();
    });

    $('.video-link').on('click', function(e) {
        e.preventDefault();
        $('.video-wrap').slideToggle();
    });

    $('.link-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#show-mobile').on('click', function(e) {
        e.preventDefault();
        $('.mobile-wrap').toggleClass('slide');
    });

    
});


