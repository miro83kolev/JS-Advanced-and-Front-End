function calculator(num1, operand, num2) {
  let result = 0;
  if (operand === "+") {
    result = num1 + num2;
  } else if (operand === "-") {
    result = num1 - num2;
  } else if (operand === "*") {
    result = num1 * num2;
  } else if (operand === "/") {
    result = num1 / num2;
  }

  return result.toFixed(2);
}

console.log(calculator(5, '+', 10));
console.log(calculator(25.5, '-', 3));