// Напишіть функцію, яка приймає два числа і колбек-функцію.
//Функція повинна помножити числа між собою та передати результат дії до колбек-функції.
//Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе,
//якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

// const result = performOperation(20, 40, callbackFunction);
//console.log(result);

//const performOperation = (a, b, callback) => callback(a * b);
//
//const checkSqrt = (number) => Math.sqrt(number);
//
//const checkNumber = (number) => (number % 2 === 0 ? "even" : "odd");
//
//console.log(performOperation(25, 64, checkSqrt));
//console.log(performOperation(75, 28, checkNumber));

//! Array methods
//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const res = getNewArray([1, 2, 3], 5);
// console.log(res);

//const getNewArray = (array) => {
//  const newArray = [];
//  array.forEach((number) => newArray.push(Math.pow(number, 2)));
//  return newArray;
//};

//const getNewArray = (array) => array.map((number) => Math.pow(number, 2));

//console.log(getNewArray([1, 2, 3, 4, 5]));

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];
// const flatArray = (arr) => arr.flatMap((item) => item.values);

// const res = flatArray(data);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const checkAge = (arr) => arr.some((item) => item.age < 20);

// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 5, 6, 8, 10];

// const checkEvenArray = (arr) => arr.every((number) => number % 2 === 0);

// const res = checkEvenArray(numbers);
// console.log(res);
