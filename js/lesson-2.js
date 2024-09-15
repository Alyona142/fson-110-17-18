// * Масиви: літерал масиву, елементи, індексація, довжина
//  Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['jazz', 'bluz'];
// styles.push("rock");
// // styles[1] = 'classic';
// const idx = styles.indexOf('bluz');
// if (idx !== -1) {
//     styles[idx] = "classic"

// }
// // console.log(styles);

// for (let i = 0; i < styles.length; i++) {
//     console.log(`${i + 1} - ${styles[i]}`);

// }

// for (const style of styles) {
//     console.log(style);

// }

//TODO:=========task-2=================
// Порахуй кількість слів у рядку,
// використовуючи методи масивів і створи новий рядок, розділений дефісами у нижньому регістрі.

// const message = 'JavaScript is a popular programming language.';
// const arrWords = message.split(" ");
// const newMessage = arrWords.join('-').toLocaleLowerCase();

// console.log(newMessage);

// const qwerty =[];

// Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.///
// const wordsArray = ['JavaScript', 'HTML', 'CSS'];
// const item = 'CSS';
// const index = wordsArray.indexOf(item);
// index !== -1 ? wordsArray.splice(index, 1) : wordsArray.push(item);
// console.log(wordsArray);

// // Створити масив з 10-ти чисел. Напиши функцію яа буде шукати найбільше число
// const numbers = [5, 8, 11, 204, 55, 74, 45, 12, 95, 100]
// // function findMaxNumber(array) {
// //     return Math.max(...array)
// // }
// // console.log(findMaxNumber(numbers));
// function findMaxNumber(array) {
//     let maxNumber = array[0];
//     for  (const number of array) {
//         if (maxNumber < number) {
//             maxNumber = number
//         }
//     }
//     return maxNumber
// };
// console.log(findMaxNumber(numbers));

//TODO:=========task-4=================
//Напишіть функцію calculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
// function calculateAverage() {
//   let totalSum = 0;
//   let count = 0;
//   for (const number of arguments) {
//     if (typeof number === "number") {
//       totalSum += number;
//       count++;
//     }
//   }
//   return totalSum / count;
// }
// console.log(calculateAverage(10, 20, "lalalal"));
// console.log(calculateAverage(10, 20, 30, 40, 50));

// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b

// function min(a = 1 , b = 5) {
//   return a < b ? a : b;
// }
// console.log(min());

// * Літерал об'єкта
//TODO:============task-1=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

// const humen = {
//   firstName: "Bob",
//   hobby: "footbol",
//   age: 25,

//   greet() {
//     console.log(`Hello ${this.firstName}`);
//   },
// };
// console.log(humen["age"]);
// humen.mood = "happy";
// humen.hobby = "skydiving";
// console.log(humen.greet());
// console.log(this);

// for (const key in humen) {
//   if (humen.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(humen[key]);
//   }
// }

//TODO:============task-3======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// function totalSolary(obj) {
//   let totalSum = 0;
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       totalSum += obj[key];
//     }
//   }
//   return totalSum;
// }

// function totalSolary(obj) {
//   let totalSum = 0;
//   for (const number of Object.values(obj)) {
//     totalSum += number;
//   }
//   return totalSum;
// }
// console.log(totalSolary(salaries));
