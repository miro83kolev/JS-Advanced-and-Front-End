function simpleCalc(num1, num2, operation) {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
  }
}

console.log(simpleCalc(5, 5, "multiply"));
console.log(simpleCalc(40, 8, "divide"));
console.log(simpleCalc(12, 19, "add"));
console.log(simpleCalc(50, 13, "subtract"));
