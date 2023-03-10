function calc() {
  let firstNum = document.getElementById("num1");
  let secondNum = document.getElementById("num2");

  let firstNumValue = Number(firstNum.value);
  let secondNumValue = Number(secondNum.value);

  let sum = firstNumValue + secondNumValue;

  let resultEl = document.getElementById("sum");
  resultEl.value = sum;
}
