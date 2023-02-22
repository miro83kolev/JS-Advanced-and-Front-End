function mathOps(num1, num2, operand) {
  switch (operand) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    case "**":
      return num1 ** num2;
  }
}

console.log(mathOps(5, 6, "+"));
console.log(mathOps(3, 5.5, "*"));
console.log(mathOps(3, 3, "**"));
console.log(mathOps(3, 3.3, "/"));
