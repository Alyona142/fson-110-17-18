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
//TODO:=========task-05=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const numbers = [1, 2, 3, 4, 5];
// const getNumber = (arr) => arr.find((number) => number > 3);
// const res = getNumber(numbers);
// console.log(res);
//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const sortedArray = (arr) => arr.toSorted((b, a) => a - b);
// const res = sortedArray(numbersArray);
// console.log(res);
//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];
// const sortedArray = (arr) => arr.toSorted((a, b) => a.localeCompare(b));
// const res = sortedArray(stringArray);
// console.log(res);
//TODO:===============task-8===============================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];
// const sortedArray = (arr) =>
//   arr.toSorted((a, b) => a.name.localeCompare(b.name));
// const res = sortedArray(users);
// console.log(res);
//TODO:=========task-09=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];
// const getAge = (arr) => arr.filter((item) => item.age > 20);
// const res = getAge(user);
// console.log(res);
//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];
// const sum = (arr) => arr.reduce((acc, number) => (acc += number), 0);
// const res = sum(numbers);
// console.log(res);

//TODO:=========task-01=================
/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */
// class Calculator {
//     constructor() {
//         this.result = 0;
//     }

//     number(num) {
//         this.result += num;
//         return this;
//     }

//     getResult() {
//         return this.result;
//     }

//     add(num) {
//         this.result += num;
//         return this;
//     }
//     substruct(num) {
//         this.result -= num;
//         return this;
//     }
//     divide(num) {
//         this.result /= num;
//         return this;
//     }
//     multiply(num) {
//         this.result *= num;
//         return this;
//     }
// }

// const calculator = new Calculator();
// const calculator1 = new Calculator();
// // console.log(calculator.result);
// // window.console.log("Hello");

// const res = calculator.number(10).add(5).multiply(2).getResult();
// console.log(res);
// const res1 = calculator1.number(50).add(20).multiply(2).getResult();
// console.log(res1);

//TODO:=========task-02=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */

class Client {
    #login;
    #email;
    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    set changeLogin(newLogin) {
        this.#login = newLogin;
    }

    get getLogin() {
        return this.#login;
    }

    set changeEmail(newEmail) {
        this.#email = newEmail;
    }

    get getEmail() {
        return this.#email;
    }
}
const olena = new Client("olena", "olena@gmail.com");
olena.changeLogin = "olena207";
console.log(olena.getLogin);
olena.changeEmail = "olena207@gmail.com";
console.log(olena.getEmail);

//! Практика наслідування у класах.
//TODO:=========task-04=================
/**
  |============Person================
  | Cтворіть клас `Person`, який містить наступні властивості:
  |  - `name` - ім'я людини;
  |  - `age`- вік людини;
  |  - `gender` - стать людини;
  |  - `email`- електронна пошта людини.
  |
  | ##### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
  |============================
*/

class Person {
    constructor(name, age, gender, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }
    getDetails() {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            email: this.email
        };
    }
}

const dmitro = new Person("Dmitro", 25, "male", "dmitro@gmail.com");
console.log(dmitro);

/**
  |=============Employee===============
  |Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  |  - salary - зарплата співробітника;
  |  - department - відділ, в якому працює співробітник.
  |  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
  |============================
*/
class Employee extends Person {
    constructor(salary, department, name, age, gender, email) {
        super(name, age, gender, email);
        this.salary = salary;
        this.department = department;
    }
}

const employee = new Employee(5000, "developer", "Bob", 30, "male", "bob@gmail.com");
console.log(employee);
