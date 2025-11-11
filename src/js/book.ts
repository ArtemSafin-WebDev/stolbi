import Validator from "./classes/Validator";

export default function book() {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".book"));
    elements.forEach((element) => {
        const form = element.querySelector<HTMLFormElement>("form");
        if (!form) return;

        const validator = new Validator(form);
        
        form?.addEventListener("submit", (event) => {
            if (validator.validate()) {
                return;
            } else {
                event.preventDefault();
            }
        });
    });
}
