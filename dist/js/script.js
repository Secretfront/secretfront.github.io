$(document).ready(function () {
    $('.slick_wrapper').slick(
        {
            centerMode: true,
            centerPadding: '5px',
            slidesToShow: 4,
            autoplay: true,
            autoplaySpeed: 500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '10px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '10px',
                        slidesToShow: 1
                    }
                }
            ]
        }
    );
});

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu_close'),
      overlay = document.querySelector('.menu_overlay'),
      link = document.querySelectorAll('.menu_link');
    

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

link.forEach((item, i, arr) => {
    link[i].addEventListener('click', () => {
            menu.classList.remove('active');
        });
      console.log(item);
      console.log(arr);
});

$(window).scroll(function() {
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


