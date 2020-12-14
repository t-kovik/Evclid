const mySwiper = new Swiper('.swiper-container', {

    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

$('.accordion').accordion({
    active: true,
    collapsible: true,
    heightStyle: 'content',
    header: '> .accordion-item > .accordion-header',
});

const burger = $('.header__btn-burger');
const closeBtn = $('.header__btn-close');

function toggleBtns (firstBtn, secondBtn, overflow) {
    firstBtn.hide();
    secondBtn.show();
    $('.header__nav').toggle();
    $('.body').css('overflow', overflow);
}

burger.click(function () {
    toggleBtns(burger, closeBtn, 'hidden');
})

closeBtn.click(function () {
    toggleBtns(closeBtn, burger, 'auto');
})
