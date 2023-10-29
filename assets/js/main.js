document.addEventListener('DOMContentLoaded', () => {
    mainSlider();
    projectSlider();
    teamSlider();
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
            nextEl: '.slider .swiper-button-next',
            prevEl: '.slider .swiper-button-prev',
        },
    };
    const swiper = new Swiper(swiperContainer, swiperOptions);
}

function projectSlider() {
    let swiperContainer = '.swiper-projects';
    let swiperOptions = {
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 1,
        spaceBetween: 20,
        clickable: true,
        renderBullet: function (index, className) {
            console.log(index);
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    const swiper = new Swiper(swiperContainer, swiperOptions);
}

function teamSlider() {
    let swiperContainer = '.team .swiper-team';
    let swiperOptions = {
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 'auto',
        spaceBetween: 55,
        freeMode: true,
        clickable: true,
    };
    const swiper = new Swiper(swiperContainer, swiperOptions);
}

function reviewSlider() {
    let swiperContainer = '.swiper-review';
    let swiperOptions = {
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
    let swiperContainer = '.news .swiper-news';
    let swiperOptions = {
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
    let swiperContainer = '.partners .swiper-partner';
    let swiperOptions = {
        navigation: {
            nextEl: '.partners .swiper-button-next',
            prevEl: '.partners .swiper-button-prev',
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
        spaceBetween: 15,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            768: {
                direction: 'vertical',
                slidesPerView: 4,
            },
        }
    });
    let swiperBig = new Swiper(swiperBigContainer, {
        spaceBetween: 10,
        thumbs: {
          swiper: swiperThumb,
        },
    });
}