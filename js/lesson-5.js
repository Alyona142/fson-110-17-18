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


// const clienData = new Date("2024-01-01");

// console.log(Date.now());



// setInterval(() => {
// const currentDate = Date.now();
// const diff = currentDate - clienData;
// console.log(convertMs(diff));

// }, 1000);  




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


// setInterval(() => {
//   const currentDate = new Date();
//   document.querySelector(".hours").textContent = currentDate.getHours();
//   document.querySelector(".minuts").textContent = currentDate.getMinutes();
//   document.querySelector(".seconds").textContent = currentDate.getSeconds();
// }, 1000)

// console.log(new Date().getDay());
// function renderCalendar() {
//   const currentDate = new Date();
//   const month = currentDate.toLocaleDateString("uk-UA", { month: "long" });
//   const year = currentDate.toLocaleDateString("uk-UA", { year: "numeric" });
//   const day = currentDate.toLocaleDateString("uk-UA", { day: "numeric" });
//   const weekDay = currentDate.toLocaleDateString("uk-UA", { weekday: "long" });

//   refs.calendarContainer.querySelector(".js-month").textContent = month;
//   refs.calendarContainer.querySelector(".js-day-number").textContent = day;
//   refs.calendarContainer.querySelector(".js-day").textContent = weekDay;
//   refs.calendarContainer.querySelector(".js-year").textContent = year;

  
// }
// renderCalendar()

// setTimeout(() => {
//   console.log(1);
  
  
// }, 2000)
// console.log(2);

// setTimeout(() => {
//   console.log(3);
  
  
// }, 0)

//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   return 'hello world';
// }
// console.log(greet());

function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello world")
    },2000)
  })
}

greet().then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(()=> console.log("finaly"))

