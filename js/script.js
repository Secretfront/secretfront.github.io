$(document).ready(function () {

    $(".menu_link").click(function () {
        if ($(".menu").hasClass("active")) {
            $(".menu").removeClass("active");
        }
    });

    $('.slick_wrapper').slick(
        {
            centerMode: false,
            centerPadding: '15px',
            slidesToShow: 4,
            // autoplay: true,
            // autoplaySpeed: 1500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: '10px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: '1px',
                        slidesToShow: 2
                    }
                }
            ]
        }
    );
});

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu_close'),
    overlay = document.querySelector('.menu_overlay');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

// $("a[href=#promo]").click(function(){
//     let _href = $(this).attr("href");
//     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//     return false;
// });


