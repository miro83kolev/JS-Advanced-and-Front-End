function firstLastSum(input) {
  let firstNum = Number(input.shift());
  let lastNum = Number(input.pop());

  let sum = firstNum + lastNum;
  return sum;
}

console.log(firstLastSum([20, 30, 40]));
console.log(firstLastSum([10, 17, 22, 33]));
