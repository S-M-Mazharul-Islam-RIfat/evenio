$(document).ready(function () {
    $('.special').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        nav: false,
        autoplay:true,
        autoplayTimeout:3000,
        touchDrag:true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('.updates').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        nav: false,
        autoplay:true,
        animateIn: 'animate__fadeIn',
        autoplayTimeout:3000,
        touchDrag:true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

})