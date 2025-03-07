import Swiper from 'swiper/bundle';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { Fancybox } from "@fancyapps/ui";
import { Mask, MaskInput } from "maska"

import './sass/app.scss';
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
    const mainSlider = new Swiper('.js-promo-slider', {
        slidesPerView: 1,
        speed: 600,
        loop: true,
        autoplay: {
            delay: 10000,
        },
        pagination: {
            el: '.js-promo-slider .swiper-pagination',
            clickable: true,
        }
    });

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

    const advantagesSlider = new Swiper('.js-advantages-slider', {
        slidesPerView: 4,
        spaceBetween: 24,
        speed: 600,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
        }
    });

    const additionalSlider = new Swiper('.js-additional-slider', {
        slidesPerView: 2.3,
        spaceBetween: 20,
        speed: 600,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: '.js-additional-slider .next'
        }
    });

    const catalogSlider = new Swiper('.js-catalog-slider', {
        slidesPerView: 5,
        spaceBetween: 20,
        speed: 600,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: '.js-catalog-navigation .next',
            prevEl: '.js-catalog-navigation .prev'
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
            320: {
                slidesPerView: 3,
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelectorAll('.review-item').length > 0) {
        document.querySelectorAll('.review-item').forEach(item => {
            const textElement = item.querySelector('.js-review-text');
            const button = item.querySelector('.js-review-more');

            const isOverflowing = textElement.scrollHeight > 120;

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

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelectorAll('.productCard-cart').length > 0) {
        document.querySelectorAll('.productCard-cart').forEach(cart => {
            const icon = cart.querySelector('.js-card-ico');
            const countContainer = cart.querySelector('.js-card-count');
            const input = countContainer.querySelector('input');
            const btnInc = countContainer.querySelector('.inc');
            const btnDec = countContainer.querySelector('.dec');

            const maxCount = parseInt(input.getAttribute('max')) || 99;

            icon.addEventListener('click', () => {
                icon.style.display = 'none';
                countContainer.style.display = 'flex';
            });

            btnInc.addEventListener('click', () => {
                const currentValue = parseInt(input.value);
                if (currentValue < maxCount) {
                    input.value = currentValue + 1;
                }
            });

            btnDec.addEventListener('click', () => {
                const currentValue = parseInt(input.value);
                if (currentValue > 1) {
                    input.value = currentValue - 1;
                }
            });
        });
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".hit-tabs div");
    const contents = document.querySelectorAll(".hit-slider");

    const defaultTab = document.querySelector('.hit-tabs div[data-tab="hit"]');
    const defaultContent = document.querySelector('.hit-slider[data-tab="hit"]');

    if (defaultTab && defaultContent) {
        defaultTab.classList.add("active");
        defaultContent.classList.add("active");
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            const target = this.getAttribute("data-tab");

            tabs.forEach((t) => t.classList.remove("active"));
            contents.forEach((c) => c.classList.remove("active"));

            this.classList.add("active");
            document.querySelector(`.hit-slider[data-tab="${target}"]`).classList.add("active");
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelectorAll('.productCard').length > 0) {
        const gridViewButton = document.querySelector('.js-view-grid');
        const rowViewButton = document.querySelector('.js-view-row');
        const productCards = document.querySelectorAll('.productCard');
        const enableGridView = () => {
            gridViewButton.classList.add('active');
            rowViewButton.classList.remove('active');
            document.querySelector('.catalog-list').classList.remove('row');
            productCards.forEach(card => card.classList.remove('row'));
        };

        const enableRowView = () => {
            rowViewButton.classList.add('active');
            gridViewButton.classList.remove('active');
            document.querySelector('.catalog-list').classList.add('row');
            productCards.forEach(card => card.classList.add('row'));
        };

        gridViewButton.addEventListener('click', enableGridView);
        rowViewButton.addEventListener('click', enableRowView);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.catalog-menu')) {
        const catalogTitle = document.querySelector('.catalog-menu__title');
        const catalogList = document.querySelector('.catalog-menu__list');

        catalogTitle.addEventListener('click', () => {
            catalogTitle.classList.toggle('active');
            catalogList.classList.toggle('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelectorAll('.productCard-additional').length > 0) {
        document.querySelectorAll('.productCard-additional').forEach(item => {
            const additionalTrigger = item.querySelector('.productCard-additional__trigger');
            const additionalSlider = item.querySelector('.productCard-additional__slider');

            additionalTrigger.addEventListener('click', () => {
                additionalTrigger.classList.toggle('active');
                additionalSlider.classList.toggle('active');
            });
        })
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const productSliderNav = new Swiper('.product-navigate .swiper', {
        centeredSlidesBounds: true,
        slidesPerView: 6,
        slidesPerGroup: 1,
        spaceBetween: 8,
        speed: 400,
        watchOverflow: true,
        slideToClickedSlide: true,
        loop: false,
        observer: true,
        observeParents: true,
        direction: 'vertical',
    });

    const productSliderMain = new Swiper('.product-slider .swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        watchOverflow: true,
        preventInteractionOnTransition: true,
        observer: true,
        observeParents: true,
        thumbs: {
            swiper: productSliderNav,
        },
        navigation: {
            nextEl: ".product-navigate__arrow",
        },
    });

    const updateActiveSlideClass = (activeIndex) => {
        productSliderNav.slides.forEach(slide => {
            slide.classList.remove('swiper-slide-active');
        });
        if (productSliderNav.slides[activeIndex]) {
            productSliderNav.slides[activeIndex].classList.add('swiper-slide-active');
        }
    };
    productSliderMain.on('slideChange', function() {
        const activeIndex = productSliderMain.activeIndex;
        productSliderNav.slideTo(activeIndex);
        updateActiveSlideClass(activeIndex);
    });
    productSliderNav.on('slideChange', function() {
        const activeIndex = productSliderNav.activeIndex;
        productSliderMain.slideTo(activeIndex);
        updateActiveSlideClass(activeIndex);
    });
    updateActiveSlideClass(productSliderMain.activeIndex);
    productSliderNav.slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            productSliderMain.slideTo(index);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('priceRange');
    noUiSlider.create(slider, {
        start: [0, 1000],
        connect: true,
        range: {
            'min': 0,
            'max': 1000
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".product-tabs__item");
    const contents = document.querySelectorAll(".product-content__item");

    const defaultTab = document.querySelector('.product-tabs__item[data-tab="characteristic"]');
    const defaultContent = document.querySelector('.product-content__item[data-tab="characteristic"]');

    if (defaultTab && defaultContent) {
        defaultTab.classList.add("active");
        defaultContent.classList.add("active");
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            const target = this.getAttribute("data-tab");

            tabs.forEach((t) => t.classList.remove("active"));
            contents.forEach((c) => c.classList.remove("active"));

            this.classList.add("active");
            document.querySelector(`.product-content__item[data-tab="${target}"]`).classList.add("active");
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('selectAll')) {
        const selectAllCheckbox = document.getElementById('selectAll');
        const productCheckboxes = document.querySelectorAll('.productCard-check input[type="checkbox"]');

        selectAllCheckbox.addEventListener('change', () => {
            productCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAllCheckbox.checked;
            });
        });

        productCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const allChecked = [...productCheckboxes].every(cb => cb.checked);
                selectAllCheckbox.checked = allChecked;
            });
        });
    }
});






