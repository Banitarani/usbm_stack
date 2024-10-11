const readline = require("readline");
console.log(readline);

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// let item1, item2, item3;
// r1.question("Enter item1  ", (input1) => {
//   item1 = parseInt(input1);
//   if (item1 % 2 !== 0) console.log("this is odd one", item1);
//   else console.log("this is even one");
// });
let num;
r1.question("Enter a Number : ", (input1) => {
  num = parseInt(input1);

  switch (num) {
    case 0:
      console.log("Today is Sunday");
      break;
    case 1:
      console.log("Today is Monday");
      break;
    case 2:
      console.log("Today is tuesday");
      break;
    case 3:
      console.log("Today is wednesday");
      break;
    case 4:
      console.log("Today is thursday");
      break;
    case 5:
      console.log("Today is friday");
      break;
    case 6:
      console.log("Today is saturday");
      break;
    default:
      console.log("Oops! Sorry, we can't find any matching case.");
      break;
  }
});
