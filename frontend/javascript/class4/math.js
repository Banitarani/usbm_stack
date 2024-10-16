// let num1 = 23;
// let num2 = 24.5;
// let addition = num1 + num2;
// console.log(addition);
// console.log(Math.round(addition));
// console.log(Math.PI);

// //ceil----//floor value
// console.log(Math.ceil(78.34));
// console.log(Math.floor(325.49));
// console.log(Math.ceil(325.49));
// console.log(Math.round(34.5));

// //max number find out
// console.log(Math.max(10, 40, 30, 50));
// console.log(Math.max(10, 40, 40, 50));
// console.log(Math.min(10, 40, 30, 50));
// console.log(Math.abs(-0.000005));

// //random number
// console.log(Math.random()); //0.04251370264848564
// // wap to print the random number between 5 to 27
// let strat = 5;
// let end = 27;
// let totalNumber = 27 - 5 + 1;
// let randomNumber = Math.floor(Math.random() * totalNumber + 5);
// console.log(randomNumber);

// // dates
// // to create date object
// let date = new Date();
// console.log(date);

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
