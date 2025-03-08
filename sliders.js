import Swiper from "swiper";

document.addEventListener("DOMContentLoaded", function () {
    const mainSlider = new Swiper('.js-promo-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
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
            prevArrows = document.querySelectorAll('.js-swiper-navigation .prev'),
            nextArrows = document.querySelectorAll('.js-swiper-navigation .next');

        const swiperInstances = [];

        sliders.forEach((slider, index) => {
            const parent = slider.closest('.categories-slider');
            const isCategoriesSlider = !!parent;

            let manySlider = new Swiper(slider, {
                slidesPerView: 5,
                spaceBetween: 20,
                speed: 600,
                loop: true,
                navigation: {
                    nextEl: nextArrows[index],
                    prevEl: prevArrows[index],
                },
                autoplay: {
                    delay: 6000,
                },
                breakpoints: {
                    1200: { slidesPerView: 5 },
                    992: { slidesPerView: 4 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    576: { slidesPerView: 2.5, spaceBetween: 10 },
                    300: { slidesPerView: 2, spaceBetween: 10 },
                }
            });

            swiperInstances.push({ instance: manySlider, parent, isCategoriesSlider });
        });

        window.addEventListener('resize', () => {
            const windowWidth = window.innerWidth;

            swiperInstances.forEach(({ instance, parent, isCategoriesSlider }, index) => {
                if (isCategoriesSlider && windowWidth <= 768) {
                    if (!instance.destroyed) {
                        instance.destroy(true, true);
                        parent.classList.remove('swiper-initialized');
                    }
                } else if (instance.destroyed) {
                    const slider = parent ? parent.querySelector('.js-swiper-index') : sliders[index];
                    instance = new Swiper(slider, {
                        slidesPerView: 5,
                        spaceBetween: 20,
                        speed: 600,
                        loop: true,
                        navigation: {
                            nextEl: nextArrows[index],
                            prevEl: prevArrows[index],
                        },
                        autoplay: {
                            delay: 6000,
                        },
                        breakpoints: {
                            1200: { slidesPerView: 5 },
                            992: { slidesPerView: 4 },
                            768: { slidesPerView: 3 },
                            576: { slidesPerView: 2.5 },
                            300: { slidesPerView: 2 },
                        }
                    });
                    swiperInstances[index].instance = instance;
                }
            });
        });

        window.dispatchEvent(new Event('resize'));
    }

    sliderinit();

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
        },
        pagination: {
            el: '.js-review-slider .swiper-pagination'
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            576: {
                slidesPerView: 1.5,
                spaceBetween: 12,
            },
            300: {
                slidesPerView: 1.2,
                spaceBetween: 12,
            }
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
        },
        breakpoints: {
            1200: {
                slidesPerView: 2.3,
            },
            992: {
                slidesPerView: 1.8,
            },
            576: {
                slidesPerView: 1.4,
            },
            300: {
                slidesPerView: 1.3,
            }
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
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 3,
                spaceBetween: 10,
            }
        }
    });
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
        pagination: {
            el: '.product-slider .swiper-pagination'
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
