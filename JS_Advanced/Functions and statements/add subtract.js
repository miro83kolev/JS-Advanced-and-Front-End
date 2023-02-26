function addSubtract(num1, num2, num3) {
  function add() {
    return num1 + num2;
  }

  function subtract() {
    return add() - num3;
  }

  return subtract();
}

console.log(addSubtract(23, 6, 10));
console.log(addSubtract(1, 17, 30));
console.log(addSubtract(42, 58, 100));
