import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui";
import { Mask, MaskInput } from "maska"

import './sass/_app.scss';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'swiper/css/bundle';

new MaskInput("[data-maska]")

//fancybox (может конфликтовать)
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

// Подключаем Yandex Maps API
const script = document.createElement('script');
script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
script.type = "text/javascript";
document.head.appendChild(script);

// Инициализация карты после загрузки Yandex Maps API
script.onload = () => {
    ymaps.ready(init);

    function init() {
        const map = new ymaps.Map('map', {
            center: [54.946557, 82.924441], // Центр карты
            zoom: 17, // Масштаб
            controls: [] // Контроллеры
        });

        const marker = new ymaps.Placemark([54.946557, 82.924441], {
            iconLayout: 'default#image',
            iconImageHref: 'https://img.icons8.com/?size=100&id=7880&format=png&color=339AF0',
            iconImageSize: [50, 50],
            iconImageOffset: [-25, -50]
        });

        map.geoObjects.add(marker);
    }

};

// document.addEventListener("DOMContentLoaded", () => {
//     const headerBurger = document.getElementById("js-header-burger");
//     const burgerMenu = document.getElementById("js-burger-menu");
//     const burgerClose = document.getElementById("js-burger-close");
//
//     headerBurger.addEventListener("click", () => {
//         burgerMenu.classList.toggle("active");
//         document.documentElement.classList.toggle("lock");
//     });
//
//     burgerClose.addEventListener("click", () => {
//         burgerMenu.classList.remove("active");
//         document.documentElement.classList.remove("lock");
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".header-search input");
    const resetButton = document.getElementById("js-search-reset");

    resetButton.style.display = "none";

    searchInput.addEventListener("input", function () {
        if (searchInput.value.trim().length > 0) {
            resetButton.style.display = "flex";
        } else {
            resetButton.style.display = "none";
        }
    });

    resetButton.addEventListener("click", function () {
        searchInput.value = "";
        resetButton.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function sliderinit() {
        const sliders = document.querySelectorAll('.js-swiper-index'),
            prevArrow = document.querySelectorAll('.js-swiper-navigation .prev'),
            nextArrow = document.querySelectorAll('.js-swiper-navigation .next');

        sliders.forEach((slider, index) => {
            let projectSlider = new Swiper(slider, {
                slidesPerView: 5,
                spaceBetween: 20,
                speed: 600,
                loop: true,
                navigation: {
                    nextEl: nextArrow[index],
                    prevEl: prevArrow[index],
                },
                autoplay: {
                    delay: 6000,
                }
            });
        })
    }

    sliderinit()

    const reviewSlider = new Swiper('.js-review-slider', {
        slidesPerView: 2,
        spaceBetween: 24,
        speed: 600,
        loop: true,
        navigation: {
            nextEl: '.js-review-navigation .next',
            prevEl: '.js-review-navigation .prev',
        },
        autoplay: {
            delay: 6000,
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelectorAll('.review-item').length > 0) {
        document.querySelectorAll('.review-item').forEach(item => {
            const textElement = item.querySelector('.js-review-text');
            const button = item.querySelector('.js-review-more');

            const isOverflowing = textElement.scrollHeight > 120;

            console.log('scrollHeight:', textElement.scrollHeight);
            console.log('clientHeight:', textElement.clientHeight);
            console.log('Переполнение:', isOverflowing);

            if (isOverflowing) {
                textElement.classList.add('clamped');
            }

            button.addEventListener('click', () => {
                const isExpanded = textElement.classList.toggle('expanded');
                button.textContent = isExpanded ? 'Скрыть' : 'Читать полностью';
            });
        });
    }
});








