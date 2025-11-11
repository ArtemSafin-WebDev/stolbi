export default function eventInfo() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".event-info")
  );
  elements.forEach((element) => {
    const accordions = Array.from(
      element.querySelectorAll<HTMLElement>(".event-info__accordion")
    );
    accordions.forEach((accordion) => {
      const btn = accordion.querySelector<HTMLButtonElement>(
        ".event-info__accordion-btn"
      );
      btn?.addEventListener("click", (event) => {
        event.preventDefault();
        btn.parentElement?.classList.toggle("open");
      });
    });
  });
}
