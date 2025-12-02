import Swiper from "swiper";
import {Autoplay, Controller, EffectFade, Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function gallery() {
    const elements = Array.from(
        document.querySelectorAll<HTMLElement>(".gallery")
    );
    elements.forEach((element) => {
        const textContainer = element.querySelector<HTMLElement>(
            ".gallery__text-slider .swiper"
        );
        const bgContainer = element.querySelector<HTMLElement>(
            ".gallery__bg-slider .swiper"
        );
        if (!bgContainer) return;

        const bgInstance = new Swiper(bgContainer, {
            //   effect: "fade",
            speed: 600,
            modules: [Navigation, Controller, EffectFade, Autoplay],
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                prevEl: element.querySelector<HTMLButtonElement>(
                    ".gallery__arrow--prev"
                ),
                nextEl: element.querySelector<HTMLButtonElement>(
                    ".gallery__arrow--next"
                ),
            },
        });

        if (!textContainer) return;
        const textInstance = new Swiper(textContainer, {
            modules: [EffectFade, Controller],
            speed: 600,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
        });

        bgInstance.controller.control = textInstance;
        textInstance.controller.control = bgInstance;
    });
}
