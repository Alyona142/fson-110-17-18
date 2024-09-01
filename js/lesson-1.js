//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

const str = "abcde";
//    if (str.startsWith("a") ) {
//     console.log("yes");

// } else {
//     console.log("no");

// }

// str.startsWith("a")? console.log("yes") : console.log("no");

// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// const number = prompt("enter number");

// if (number >= 55 && number <= 99) {
//     alert("Число потрапляє в діапазон");
// } else {
//     alert("Число не потрапляє в діапазон");
// }

// number >= 55 && number <= 99 ?  alert("Число потрапляє в діапазон") : alert("Число не потрапляє в діапазон");

// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

/* const ageMaks = 102;
if (ageMaks >= 0 && ageMaks <= 16) {
    console.log("діти");
    
}
else if (ageMaks >= 17 && ageMaks <= 60) {
    console.log("дорослі");
    
}
else if (ageMaks <=61 && ageMaks <= 100) {
    console.log("пенсіонери");
    
}
else {
console.log("error");

} */

//* Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

// const drink = prompt("оберіть напій").toLowerCase();

// function orderDrink(product) {
//   switch (product) {
//     case "кава":
//       return "сумма до сплати 60 грн";

//     case "чай":
//       return "сумма до сплати 40 грн";

//     case "сік":
//       return "сумма до сплати 30 грн";

//     default:
//       return "такого напою немає";
//   }
// }
// alert(orderDrink(drink));

// function orderDrink(product) {
//   let price = 0;
//   switch (product) {
//     case "кава":
//       price = 60;
//       break;

//     case "чай":
//       price = 40;
//       break;
//     case "сік":
//       price = 30;
//       break;

//     default:
//       return "такого напою немає";
//   }
//   return `сумма до сплати ${price} грн`;
// }
// alert(orderDrink(drink));

// for (let i = 1; i <= 1000; i++) {
//   console.log(i);
// }

//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *****
let star = "*";
for (let i = 1; i <= 7; i++) {
  console.log(star);
  star += "*";
}
