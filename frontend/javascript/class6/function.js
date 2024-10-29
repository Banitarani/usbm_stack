// // getMyName(); // hoisting method
// // function getMyName() {
// //   let name = "banita";
// //   console.log(`I am ${name}`);
// // }
// // //invokation or function call

// // function print(name, age, city) {
// //   console.log(`I am ${name},now i am ${age} and i live in ${city}`);
// // }
// // print("Banita", 22, "Bhubaneswar");

// // function printName(name, age, city) {
// //   return `My name is ${name},and i am ${age},i live in ${city}`;
// //   console.log("i am happpy");
// // }
// // let result = printName("banita", 22, "bhubaneswar");
// // console.log(result);

// // const getName = (name) => {
// //   return `my name is ${name}`;
// // };
// // console.log(getName("banita"));

// function greeting(name, hour) {
//   if (hour < 12) {
//     return `Hii goodmorning! ${name}`;
//   } else if (hour < 18) {
//     return `Hii good afternoon! ${name}`;
//   } else {
//     return `Hii good evening! ${name}`;
//   }
// }
// const result = greeting("Banita", 16);
// console.log(result);

// const calculator = (a, b, operator) => {
//   switch (operator) {
//     case "*":
//       return a * b;
//       break;
//     case "+":
//       return a + b;
//       break;
//     case "-":
//       return a - b;
//       break;
//     case "/":
//       return a / b;
//       break;
//     default:
//       return "invalid operator";
//       break;
//   }
// };
// const final = calculator(3, 4, "*");
// console.log(final);

// // const add = (a, b) => {
// //   console.log(add(5, 6));
// // };

// const add = (a, b) => a + b;
// console.log(add(5, 7));

// const bmi = (weight, height) => {
//   return weight / (height * height);
// };

// const last = bmi(23, 22);
// console.log(last);

// const printNumbers = (...numbers) => {
//   return numbers;
// };
// let resul = printNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(resul);

setTimeout(() => {
  console.log("heyy,USBM girls.");
}, 5000);
setInterval(() => {
  console.log("heyy");
}, 1000);
