$(document).ready(function(){
    $('.header__slider').slick({
        autoplay: true,
        arrows: true,
        autoplaySpeed: 6000,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear'
    });

    var leftNavHtml = '<svg class="slick-prev__icon"> \
                    <use xlink:href="img/sprite.svg#icon-chevron-thin-left"></use> \
                    </svg>';

    var rightNavHtml = '<svg class="slick-next__icon"> \
                    <use xlink:href="img/sprite.svg#icon-chevron-thin-right"></use> \
                    </svg>';

    $('.slick-prev').append(leftNavHtml);
    $('.slick-next').append(rightNavHtml);
});


