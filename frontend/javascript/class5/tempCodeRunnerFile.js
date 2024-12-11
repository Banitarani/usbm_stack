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