import "virtual:svg-icons-register";
import "../scss/style.scss";
import menu from "./menu";
import selects from "./selects";
import counter from "./counter";
import datepicker from "./datepicker";
import gallery from "./gallery";
import book from "./book";
import eventInfo from "./eventInfo";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  selects();
  counter();
  datepicker();
  gallery();
  book();
  eventInfo();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
