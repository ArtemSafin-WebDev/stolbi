export default function menu() {
  const toggleBtn = document.querySelector<HTMLButtonElement>(
    ".page-header__burger"
  );
  toggleBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("menu-open");
  });
}
