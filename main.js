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
                speed: 300,
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
});

