;
(function ($) {
    $(document).ready(function ($) {

        $(".mobile-trigger").on("click", function () {
            $(".main-menu").toggleClass("active");
            $(".header-menu").toggleClass("active");
        });
        $(".main-menu .menu-close").on("click", function (e) {
            e.preventDefault();
            $(".main-menu").toggleClass("active");
            $(".header-menu").toggleClass("active");
        });

        $('.featured-slider').owlCarousel({
            items: 4,
            margin: 30,
            loop: false,
            dots: false,
            nav: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            autoplay: false,
        });

        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top-180
                    }, 1000);
                    return false;
                }
            }
        });
    });
})(jQuery);