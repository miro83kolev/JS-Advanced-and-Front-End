function sumTable() {
  let costEls = document.querySelectorAll("tr td:nth-of-type(2)");

  let sum = Array.from(costEls).reduce((a, x) => {
    let currentValue = Number(x.textContent) || 0;
    return a + currentValue;
  }, 0);

  let resultEl = document.getElementById("sum");
  resultEl.textContent = sum;
}
