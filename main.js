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

document.addEventListener("DOMContentLoaded", () => {
    const headerBurger = document.getElementById("js-header-burger");
    const burgerMenu = document.getElementById("js-burger-menu");
    const burgerClose = document.getElementById("js-burger-close");

    headerBurger.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
        document.documentElement.classList.toggle("lock");
    });

    burgerClose.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        document.documentElement.classList.remove("lock");
    });
});
