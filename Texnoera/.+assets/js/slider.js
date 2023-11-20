var swiper = new Swiper(".studentSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 17,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 300px
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window width is >= 375px
        375: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40
        }
    }
});

var swiper = new Swiper(".presentationSwiper", {
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 300px
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
            width: 260,
        },
        // when window width is >= 375px
        375: {
            slidesPerView: 1,
            spaceBetween: 10,
            width: 320,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1048: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});


var swiper = new Swiper(".partnerSwiper", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    slidesPerView: 6,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 300px
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window width is >= 375px
        375: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1048: {
            slidesPerView: 6,
            spaceBetween: 40
        }
    }
});

var swiper = new Swiper(".trainerSwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 300px
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window width is >= 375px
        375: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 16
        },
        1048: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});
