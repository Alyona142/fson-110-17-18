// Створіть контейнер div (з класом numberContainer )в
// HTML - документі та динамічно створіть 100 блоків(з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).Парні числа повинні мати зелений
// фон(додати клас even), Непарні числа - жовтий фон(додати клас odd).

const container = document.createElement('div');
container.classList.add('number-container');

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const bodyEl = document.querySelector('body');

for (let i = 0; i <= 100; i++) {
    const div = document.createElement('div');
    div.classList.add('number');
    div.textContent = randomNumber();

    if (div.textContent % 2 === 0) {
        div.classList.add('even');
    }
    else {
        div.classList.add('odd');
    }
    container.appendChild(div);
}

bodyEl.prepend(container);


