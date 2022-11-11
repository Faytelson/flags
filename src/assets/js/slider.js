$(document).ready(function () {
    $('.product-info__slider').slick({
        slidesToShow: 4,
        arrows: true,
        vertical: true,
        verticalSwiping: true,

        responsive: [
            {
                breakpoint: 901,
                settings: {
                    vertical: false,
                    arrows: false,
                    dots: true,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                    arrows: false,
                    dots: true,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: false,
                    arrows: false,
                    dots: true,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                    vertical: false,
                    arrows: false,
                    dots: true,
                    verticalSwiping: false,
                }
            }
        ]
    });
});