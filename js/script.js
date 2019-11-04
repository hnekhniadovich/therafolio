$(document).ready(function(){
    $('.header__slider').slick({
        autoplay: true,
        arrows: true,
        autoplaySpeed: 5000,
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

    $(".sidebar__icon--x, .sidebar-overlay").on("click", function() {
        $("#sidebar").removeClass("active");
        $(".sidebar-overlay").fadeOut()
    });
    $("#sidebarCollapse").on("click", function() {
        $("#sidebar").addClass("active");
        $(".sidebar-overlay").fadeIn()
    });
});






