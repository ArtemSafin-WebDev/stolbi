export default function counter() {
    const elements = Array.from(
        document.querySelectorAll<HTMLElement>(".js-counter")
    );
    elements.forEach((element) => {
        const input = element.querySelector<HTMLInputElement>("input");
        if (!input) return;
        const minusBtn = element.querySelector<HTMLButtonElement>(".js-minus-btn");
        const plusBtn = element.querySelector<HTMLButtonElement>(".js-plus-btn");

        console.log(input, minusBtn, plusBtn);

        plusBtn?.addEventListener("click", (event) => {
            event.preventDefault();
            const currentValue = input.valueAsNumber;
            const newValue = currentValue + 1;
            input.value = newValue.toString();
        });

        minusBtn?.addEventListener("click", (event) => {
            event.preventDefault();
            const currentValue = input.valueAsNumber;
            const newValue = currentValue > 1 ? currentValue - 1 : currentValue;
            input.value = newValue.toString();
        });
    });
}
