document.addEventListener('DOMContentLoaded', () => {
    mainSlider();
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