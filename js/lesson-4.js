// Створіть контейнер div (з класом numberContainer )в
// HTML - документі та динамічно створіть 100 блоків(з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).Парні числа повинні мати зелений
// фон(додати клас even), Непарні числа - жовтий фон(додати клас odd).

const container = document.createElement("div");
container.classList.add("number-container");

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const bodyEl = document.querySelector("body");

for (let i = 0; i <= 100; i++) {
  const div = document.createElement("div");
  div.classList.add("number");
  div.textContent = randomNumber();

  if (div.textContent % 2 === 0) {
    div.classList.add("even");
  } else {
    div.classList.add("odd");
  }
  container.appendChild(div);
}

bodyEl.prepend(container);

// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity 0.5)

const films = [
  {
    title: "Tetris",
    imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id: "film_1",
  },
  {
    title: "Avatar: The Way of Water",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id: "film_2",
  },
  {
    title: "Operation Fortune: Ruse de guerre",
    imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id: "film_3",
  },
  {
    title: "Babylon",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id: "film_4",
  },
  {
    title: "The Whale",
    imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id: "film_5",
  },
];

// Приклад елементу списку
// <li id="${id}">
//      <img src="${imgUrl}" alt="${title}" />
//      <p>${title}</p>
// </li>

const watchedFilms = ["film_2", "film_4", "film_5"];

function createMarkup(arr) {
  return arr
    .map(
      (item) => `<li id="${item.id}">
     <img src="${item.imgUrl}" alt="${item.title}" />
     <p>${item.title}</p>
 </li>`
    )
    .join("");
}

const filmList = document.querySelector(".film-list");
// filmList.innerHTML = createMarkup(films);
filmList.insertAdjacentHTML("beforeend", createMarkup(films));

watchedFilms.forEach(
  (el) => (filmList.querySelector(`#${el}`).style.opacity = 0.5)
);
let modal = null;
const btn = document.querySelector(".modal-btn");
btn.addEventListener("click", (e) => {
  modal = basicLightbox.create(
    `
        <div class="modal">
            <p>
                Your first lightbox with just a few lines of code.
                Yes, it's really that simple.
            </p>
        </div>
    `,
    {
      onShow: () => {
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onEscClick);
      },
      /*
       * Function that gets executed before the lightbox closes.
       * Returning false will prevent the lightbox from closing.
       */
      onClose: () => {
        document.body.style.overflow = "visible";
        document.removeEventListener("keydown", onEscClick);
      },
    }
  );

  modal.show();
});

function onEscClick(event) {
  if (event.code !== "Escape") {
    return;
  }
  modal.close();
  //console.log("Escape");
  
}
