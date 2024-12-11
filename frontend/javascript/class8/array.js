// let arr = ["A", "B", "R", "S", "J", "P"];
// const add = arr.forEach((el, i) => {
//   return el.toLowerCase();
// });
// console.log(add);

// let arr1 = ["A", "B", "R", "S", "J"];
// const newArray = arr1.map((el, i) => {
//   //   console.log(el, i);
//   return el.toLowerCase();
// });
// console.log(newArray);

// let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const oddArray = numArray.filter((el) => {
//   return el % 2 !== 0;
// });
// console.log(oddArray);

// const student = new Object();
// student.name = "banita";
// student.age = 22;
// student.batch = "mca";
// student.name = "pablo";// modify the element

// console.log(student.name, student.age);
// console.log(typeof student);

let s = "bani";
let rev = "";
for (let i = s.length - 1; i >= 0; i--) {
  rev += s.charAt(i);
}
console.log(rev);

const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("enter the letter:", (inputS) => {
  let s = inputS;
  let rev = "";
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s.charAt(i);
  }
  if (rev === s) {
    console.log("It is pallindrom");
  } else {
    console.log("this not a pallindrom");
  }
  r1.close();
});
