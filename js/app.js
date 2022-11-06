const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__link');

burger.addEventListener('click', function () {
    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (e) {
    e.addEventListener('click', function () {
        burger.classList.remove('header__burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
    });
});

let tabsBtn = document.querySelectorAll('.work__link');
let tabsItem = document.querySelectorAll('.work__main-info');

tabsBtn.forEach(function (e) {
    e.addEventListener('click', function (el) {
        const path = el.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) {
            btn.classList.remove('work__link--active');
        });

        el.currentTarget.classList.add('work__link--active');

        tabsItem.forEach(function (item) {
            item.classList.remove('work__main-info--active');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('work__main-info--active');
    })
});

new Accordion('.accordion-list', {
    elementClass: 'accordion',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion--active'
});

const searchIcon = document.querySelector('.header__icon');
const logo = document.querySelector('.header__logo');
const nav = document.querySelector('.header__nav');
const searchContainer = document.querySelector('.header__input-container');
const openedClose = document.querySelector('.header__opened-close');
const input = document.querySelector('.header__opened-input');

searchIcon.addEventListener('click', function () {
    searchIcon.classList.toggle('unvisible');
    burger.classList.toggle('unvisible');
    searchContainer.classList.toggle('unvisible');
    logo.classList.toggle('unvisible');
    nav.classList.toggle('unvisible');
    input.value = '';
});

openedClose.addEventListener('click', function () {
    searchIcon.classList.toggle('unvisible');
    burger.classList.toggle('unvisible');
    searchContainer.classList.toggle('unvisible');
    logo.classList.toggle('unvisible');
    nav.classList.toggle('unvisible');
    input.value = '';
});