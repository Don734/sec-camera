document.addEventListener('DOMContentLoaded', () => {
    mainSlider();
    reviewSlider();
    newsSlider();
    partnersSlider();
    bigAndThumbSlider();
})

function mainSlider() {
    let swiperContainer = '.swiper-main';
    let swiperOptions = {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    };
    const swiper = new Swiper(swiperContainer, swiperOptions);
}

function reviewSlider() {
    let swiperContainer = '.swiper-review';
    let swiperOptions = {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 1,
        spaceBetween: 20,
        clickable: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    };
    const swiper = new Swiper(swiperContainer, swiperOptions);
}

function newsSlider() {
    let swiperContainer = '.swiper-news';
    let swiperOptions = {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.news .swiper-button-next',
            prevEl: '.news .swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 20,
        clickable: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    };
    const swiper = new Swiper(swiperContainer, swiperOptions);
}

function partnersSlider() {
    let swiperContainer = '.swiper-partner';
    let swiperOptions = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        clickable: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        }
    };
    const swiper = new Swiper(swiperContainer, swiperOptions);
}

function bigAndThumbSlider() {
    let swiperBigContainer = '.swiper-big';
    let swiperThumbContainer = '.swiper-thumbs';
    let swiperThumb = new Swiper(swiperThumbContainer, {
        direction: 'vertical',
        spaceBetween: 15,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    let swiperBig = new Swiper(swiperBigContainer, {
        spaceBetween: 10,
        thumbs: {
          swiper: swiperThumb,
        },
    });
}