$(document).ready(function(){
        $('.menu-btn').click(function () {
            $('body').toggleClass('show-nav');
            $(this).toggleClass('open');
            setTimeout(function () {
        $('.header__links').toggleClass('show');
    }, 100);
            return false;
        });
        $(window).resize(function () {
            if ($(window).width() > 960) {
                $('body').removeClass('show-nav');
                $('.menu-btn').removeClass('open');
                $('.header__links').removeClass('show');
            }
        }).resize();
});
