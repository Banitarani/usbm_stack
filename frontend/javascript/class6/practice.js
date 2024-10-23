const add = (a, b) => {
  return a + b;
};

const minus = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const calculater = (value1, value2, callback) => callback(value1, value2);
console.log(calculater(10, 20, mul));
