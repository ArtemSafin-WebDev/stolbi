import Swiper from "swiper";
import {Navigation} from "swiper/modules";

import "swiper/css";

export default function aboutHouses() {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".about-houses"));

    elements.forEach((element) => {

        const sliders = Array.from(element.querySelectorAll<HTMLElement>(".about-houses__block"));
        sliders.forEach(slider => {
            const container = slider.querySelector<HTMLElement>(".swiper");
            if (!container) return;
            new Swiper(container, {
                speed: 600,
                modules: [Navigation],
                navigation: {
                    prevEl: slider.querySelector<HTMLButtonElement>(
                        ".about-houses__block-arrow--prev"
                    ),
                    nextEl: slider.querySelector<HTMLButtonElement>(
                        ".about-houses__block-arrow--next"
                    ),
                },
            })
        })

    })
}