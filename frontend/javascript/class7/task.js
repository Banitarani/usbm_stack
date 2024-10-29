//What is difference b/w push(), pop(), shift(), unshift() with lots of examples.# Todo ?

let arr1 = [1, 2, 3, 4];
let add = 7;
arr1.push(add);
console.log(arr1); // push means add the element end of the array

let fruits = ["apple", "orange", "banana"];
fruits.pop();
console.log(fruits); // pop means remove the element end of the array

let animal = ["tiger", "cow", "dog", "cat"];
let animalArray = "rat";
animal.unshift(animalArray);
console.log(animal); //unshift means add the element start of the array

let domestic = ["tiger", "cow", "dog", "cat"];
domestic.shift();
console.log(domestic); //shift means remove the element end of the array
