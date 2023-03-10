function subtract() {
  let firstNum = document.getElementById("firstNumber");
  let firstNumAsNumber = Number(firstNum.value);
  let secondNum = document.getElementById("secondNumber");
  let secondNumAsNumber = Number(secondNum.value);

  let result = firstNumAsNumber - secondNumAsNumber;

  let resultEl = document.getElementById("result");
  resultEl.textContent = result;
}
