import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

export default function datepicker() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-datepicker")
  );
  elements.forEach((element) => {
    const input = element.querySelector<HTMLInputElement>('input[type="text"]');
    const label = element.querySelector<HTMLElement>(
      ".book__form-datepicker-label"
    );
    const calendar = element.querySelector<HTMLElement>(
      ".book__form-datepicker-calendar"
    );
    if (!input || !calendar) return;

    new AirDatepicker(calendar, {
      inline: true,
      minDate: new Date(),
      prevHtml: `
        <svg width="18" height="18" viewBox="0 0 18 18" >
            <path d="M10.7197 2.84467C11.0126 2.55178 11.4874 2.55178 11.7803 2.84467C12.0732 3.13756 12.0732 3.61232 11.7803 3.90522L6.68555 8.99994L11.7803 14.0947C12.0732 14.3876 12.0732 14.8623 11.7803 15.1552C11.4874 15.4481 11.0126 15.4481 10.7197 15.1552L5.09473 9.53022C4.80184 9.23732 4.80184 8.76256 5.09473 8.46967L10.7197 2.84467Z" />
        </svg>
      `,
      nextHtml: `
        <svg width="18" height="18" viewBox="0 0 18 18">
            <path d="M6.21967 2.84467C6.51256 2.55178 6.98732 2.55178 7.28022 2.84467L12.9052 8.46967C13.1981 8.76256 13.1981 9.23732 12.9052 9.53022L7.28022 15.1552C6.98732 15.4481 6.51256 15.4481 6.21967 15.1552C5.92678 14.8623 5.92678 14.3876 6.21967 14.0947L11.3144 8.99994L6.21967 3.90522C5.92678 3.61232 5.92678 3.13756 6.21967 2.84467Z"/>
        </svg>
      `,
      onSelect: ({ formattedDate }) => {
        if (formattedDate) {
          input.value = formattedDate as string;
        } else {
          input.value = "";
        }
        element.classList.remove("active");
        input.dispatchEvent(new Event("input"));
      },
    });

    label?.addEventListener("click", () => {
      element.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (element.contains(target)) {
        return;
      } else {
        element.classList.remove("active");
      }
    });
  });
}
