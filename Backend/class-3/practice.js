const fs = require("fs");
console.log(fs);
fs.writeFileSync("notes.txt", "hii users\n"); // create file
fs.appendFileSync("notes.txt", "it is use for append  file"); // append the file
const data = fs.readFileSync("notes.txt"); // read the file
console.log(data.toString());
fs.mkdirSync("file"); // make folder
fs.renameSync("file", "files"); //rename
