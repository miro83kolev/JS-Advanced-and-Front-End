function smallestNum(num1, num2, num3) {
  let arr = [];
  arr.push(num1);
  arr.push(num2);
  arr.push(num3);

  return Math.min(...arr);
}

console.log(smallestNum(2, 5, 3));
console.log(smallestNum(600, 342, 123));
console.log(smallestNum(25, 21, 4));
console.log(smallestNum(2, 2, 2));
