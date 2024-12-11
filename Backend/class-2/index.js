//import module
const math = require("./math");
const fs = require("fs");
//custom module
console.log(math.add(4, 5));
console.log(math.sub(4, 15));
console.log(math.mul(4, 8));
console.log(math.div(7, 5));
console.log(math.rem(40, 5));
// inbuilt modules
console.log(fs);
fs.writeFileSync("notes.txt", "banita \n");
fs.appendFileSync("notes.txt", "data is append ");
const data = fs.readFileSync("notes.txt");
console.log(data.toString());
