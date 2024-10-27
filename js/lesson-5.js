import { refs } from "./refs.js";
import {
  addDateToLocalStorage,
  getDateLocalStorage,
} from "./localStorage-api.js";

const LS_KEY_SWITCH = "switch";

document.addEventListener("DOMContentLoaded", renderPage)
refs.chackbox.addEventListener("click", (event) => {
  const chackbox = event.target.checked;

  if (chackbox) {
    refs.body.classList.replace("light", "dark");
    addDateToLocalStorage(LS_KEY_SWITCH, "dark");
  } else {
    refs.body.classList.replace("dark", "light");
    addDateToLocalStorage(LS_KEY_SWITCH, "light");
  }
});

function renderPage() {
  const LS_DATE = getDateLocalStorage(LS_KEY_SWITCH);
  if (LS_DATE === "dark") {
    refs.body.classList.replace("light", "dark");
    refs.chackbox.checked = true
  } else {
    refs.body.classList.replace("dark", "light");
  }
}

