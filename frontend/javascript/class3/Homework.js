// const readline = require("readline");
// console.log(readline);

// // // const r1 = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout,
// // });
// // // let item1, item2, item3;
// // // r1.question("Enter item1  ", (input1) => {
// // //   item1 = parseInt(input1);
// // //   if (item1 % 2 !== 0) console.log("this is odd one", item1);
// // //   else console.log("this is even one");
// // // });
// let num;
// r1.question("Enter a Number : ", (input1) => {
//   num = parseInt(input1);

//   switch (num) {
//     case 0:
//       console.log("Today is Sunday");
//       break;
//     case 1:
//       console.log("Today is Monday");
//       break;
//     case 2:
//       console.log("Today is tuesday");
//       break;
//     case 3:
//       console.log("Today is wednesday");
//       break;
//     case 4:
//       console.log("Today is thursday");
//       break;
//     case 5:
//       console.log("Today is friday");
//       break;
//     case 6:
//       console.log("Today is saturday");
//       break;
//     default:
//       console.log("Oops! Sorry, we can't find any matching case.");
//       break;
//   }
// });

// const readline = require("readline");
// console.log("readline");

// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let char;
// r1.question("Enter the character :", (input1) => {
//   char = input1;
//   switch (char) {
//     case "apple":
//       console.log("this is month of january");
//       break;

//     case "mango":
//       console.log("this is month of january");
//       break;
//     default:
//       console.log("this is NOT VALID");
//       break;
//   }
//   r1.close();
// });
// let i = 0;
// r1.question("enter the number 0,- you will get table of 8  :", (input1) => {
//   i = parseInt(input1);
//   // while (i <= 10) {
//   //   i++;
//   //   result = i * 5;
//   //   console.log(result);
//   // }
//   do {
//     i++;
//     result = i * 8;
//     console.log(result);
//   } while (i <= 10);
//   r1.close();
// });
// const readline = require("readline");
// // console.log(readline);
// const r2 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let num;
// function askNumber() {
//   r2.question("enter the number which is grater than 10 :", (input) => {
//     num = parseInt(input);
//     do {
//       console.log("you entered ", num);
//       if (num <= 10) {
//         console.log("The number should be greater than 10!");
//         r2.question("Try again: ", (input2) => {
//           num = parseInt(input2);
//         });
//       }
//     } while (num < 10);
//     {
//       console.log("you enterd valid number:", num);
//     }
//     r2.close();
//   });
// }
// askNumber();

//1. Generate a random number between 1 and 100.
let start = 1;
let end = 100;
let total = 100 - 1 + 1;
let randomNumber = Math.floor(Math.random() * total + 1);
console.log(randomNumber);

// 2. Task: Round the number 6.75 down to the nearest integer.

console.log(Math.floor(6.75));

// 3. Task: Round the number 9.12 up to the nearest integer.
console.log(Math.ceil(9.12));

// 4. Task: Generate a random number between 5 and 27 (inclusive).

let random = Math.floor(Math.random() * (27 - 5 + 1)) + 5;
console.log(random);

// 5. Task: Add 5 days to the current date.
let currentDate = new Date();
let futureDate = currentDate.getTime() + 5 * 24 * 60 * 60 * 1000;
futureDate = new Date(futureDate);
console.log(futureDate);

// 6. Task: Get the number of milliseconds between January 1, 2023, and today.
let startDate = new Date("2023-01-01");
let date = new Date("2024-10-15");
let millisecondsDiff = date.getTime() - startDate.getTime();
console.log(millisecondsDiff);

// 7. Task: Get the current hour.
let a = new Date();
let currentHour = a.getHours();
console.log(currentHour);

// 8. Task: Create a date for January 1, 2025.
let b = new Date(2025, 0, 1);
console.log(b);

// 9. Task: Get the current day of the week (0 for Sunday, 6 for Saturday).
let currentDay = new Date(Date.now()).getDay();
console.log(currentDay);

// 10. Task: Get the current month (0-11).

let currentMonth = new Date(Date.now()).getMonth();
console.log(currentMonth);

// 11. Task: What is the difference between getDate() and getDay()?
// * in getDate() function we get date within the month.
// * in getDay()  function we get day within the weeks .
