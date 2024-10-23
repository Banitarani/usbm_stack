// getMyName(); // hoisting method
// function getMyName() {
//   let name = "banita";
//   console.log(`I am ${name}`);
// }
// //invokation or function call

// function print(name, age, city) {
//   console.log(`I am ${name},now i am ${age} and i live in ${city}`);
// }
// print("Banita", 22, "Bhubaneswar");

// function printName(name, age, city) {
//   return `My name is ${name},and i am ${age},i live in ${city}`;
//   console.log("i am happpy");
// }
// let result = printName("banita", 22, "bhubaneswar");
// console.log(result);

// const getName = (name) => {
//   return `my name is ${name}`;
// };
// console.log(getName("banita"));

function greeting(name, hour) {
  if (hour < 12) {
    return `Hii goodmorning! ${name}`;
  } else if (hour < 18) {
    return `Hii good afternoon! ${name}`;
  } else {
    return `Hii good evening! ${name}`;
  }
}
const result = greeting("Banita", 10);
console.log(result);
