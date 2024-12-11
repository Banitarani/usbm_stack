// - Q1. Write a program that calculates the sum of all digits of a given number using a loop.

let i;
let sum = 0;
for (i = 1; i <= 10; i++) {
  sum += i;
  console.log(`the sum of 10 umber is ${sum}`);
}
// Write a program that prints the multiplication table of a number using a for loop.
let x;
let mul = 0;
for (x = 0; x <= 10; x++) {
  mul = x * 2;
  console.log(mul);
}

// Write a program that prints the first n prime numbers.

// let a;
// for (a = 1; a <= 5; a++) {
//   let pattern = "";
//   for (b = 1; b <= a; b++) {
//     pattern += "*";
//   }
//   console.log(pattern);

//  let c;
// for (c = 5; c >= 1; c--) {
// let pattern = "";
//   for (d = 1; d <= c; d++) {
//     pattern += "*";
//    }
//   console.log(pattern);
//   }

let e;
let row = 5;
for (e = 1; e <= row; e++) {
  let pattern = "";
  for (f = 1; f <= row - e; f++) {
    pattern += " ";
  }
  for (g = 1; g <= 2 * e - 1; g++) {
    pattern += "*";
  }
  console.log(pattern);
}

// // let rows = 5;
// // for (let i = 1; i <= rows; i++) {
// //   let str = "";
// //   for (let j = 1; j <= rows - i; j++) {
// //     str += " ";
// //   }
// //   for (let k = 1; k <= 2 * i - 1; k++) {
// //     str += "*";
// //   }
// //   console.log(str);
// // }
// // for (let i = rows - 1; i >= 1; i--) {
// //   let str = "";
// //   for (let j = 1; j <= rows - i; j++) {
// //     str += " ";
// //   }
// //   for (let k = 1; k <= 2 * i - 1; k++) {
// //     str += "*";
// //   }
// //   console.log(str);
// // }
// let rows = 5;
// let cols = 5;
// for (let i = 1; i <= rows; i++) {
//   let str = "";
//   if (i === 1 || i === rows) {
//     for (let j = 1; j <= cols; j++) {
//       str += "*";
//     }
//   } else {
//     str += "*";
//     for (let j = 2; j < cols; j++) {
//       str += " ";
//     }
//     str += "*";
//   }

//   console.log(str);
// }

let n = 10;
let first_num = 0;
let second_num = 1;
let next_num = 0;
for (let i = 1; i <= n; i++) {
  console.log(first_num);
  next_num = first_num + second_num;
  first_num = second_num;
  second_num = next_num;
}

let number;
let a;
function factorial(a) {
  if (a == 1) return 1;
  return a * factorial(a - 1);
}
const add = factorial(4);
console.log(add);

let s = "545";
let rev = "";
for (i = s.length - 1; i >= 0; i--) {
  rev += s.charAt(i);
}
console.log(rev);
