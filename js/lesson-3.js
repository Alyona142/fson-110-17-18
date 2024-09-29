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
