function largestNum(num1, num2, num3) {
  let numArray = new Array();
  numArray.push(num1);
  numArray.push(num2);
  numArray.push(num3);

  return `The largest number is ${Math.max(...numArray)}.`;
}

console.log(largestNum(1, 10, 43));
console.log(largestNum(5, -3, 16));
console.log(largestNum(-3, -5, -22.5));
