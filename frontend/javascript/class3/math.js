let num1 = 5;
let num2 = 34;
let result = num2 + num1;
// let result = num2 - num1;
// let result = num2 * num1;
// let result = num2 / num1;
console.log(result);
//modulo operator
let a = 29;
let final = a % 2;
console.log(final);
//expontial operator
let num3 = 2 ** 4;
console.log(num3);
//relational opertaor
console.log(10 > !5);
console.log(5 === 5);
console.log(5 !== "5");
if (" ") {
  //if we write any space then it will give true statemet
  console.log("it is true");
}
let total_bill = 1000;
let discount;
if (total_bill >= 1000) {
  console.log("you have got 10% discount");
} else {
  console.log("no discount sir/madam");
}
let age = 6;
let adult;
let senior;
let minor;
if ((age > 18) & (age < 60)) {
  console.log("You are adult ");
} else if (age > 60) {
  console.log("You are sinior");
} else {
  console.log("Hello, you are minor now");
}
// let vowel = a,
//   e,
//   i,
//   o,
//   u;
// let char = a;
// if (char == vowel) {
//   console.log("Kid's it is a vowel");
// } else {
//   console.log("It is consonant");
// }
let char = "b";
switch (char) {
  case "a":
    console.log("It is vowel");
    break;
  case "e":
    console.log("It is vowel");
    break;
  case "i":
    console.log("It is vowel");
    break;
  case "o":
    console.log("It is vowel");
    break;
  case "u":
    console.log("It is vowel");
    break;

  default:
    console.log("it is not a vowel");
    break;
}

let day = "0";
switch (day) {
  case "0":
    console.log("Hii.. Sunday");
    break;
  case "1":
    console.log("Hii.. Monday");
    break;
  case "2":
    console.log("Hii.. Tuesday");
    break;
  case "3":
    console.log("Hii.. Wednessday");
    break;
  case "4":
    console.log("Hii.. Thursday");
    break;
  case "5":
    console.log("Hii.. Fridayrday");
    break;
  case "0":
    console.log("Hii.. Saturday");
    break;
  default:
    console.log("It,s not count as day");
    break;
}

let month = "0";
switch (month) {
  case "0":
    console.log("Hii ... January");
    break;
  case "1":
    console.log("Hii ... February");
    break;
  case "2":
    console.log("Hii ... March");
    break;
  case "3":
    console.log("Hii ... April");
    break;
  case "4":
    console.log("Hii ... May");
    break;
  case "5":
    console.log("Hii ... June");
    break;
  case "6":
    console.log("Hii ... July");
    break;
  case "7":
    console.log("Hii ... August");
    break;
  case "8":
    console.log("Hii ... September");
    break;
  case "9":
    console.log("Hii ... october");
    break;
  case "10":
    console.log("Hii ... November");
    break;
  case "11":
    console.log("Hii ... December");
    break;
  default:
    console.log("Sorry we could'nt find any month");
    break;
}
