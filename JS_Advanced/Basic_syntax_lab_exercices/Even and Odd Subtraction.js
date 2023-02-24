function evenOddSubs(input) {
  let evenSum = 0;
  let oddSum = 0;
  let finalResult = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      evenSum += Number(input[i]);
    } else {
      oddSum += Number(input[i]);
    }
  }

  finalResult = evenSum - oddSum;
  return finalResult;
}

console.log(evenOddSubs([1,2,3,4,5,6]));
console.log(evenOddSubs([3,5,7,9]));
console.log(evenOddSubs([2,4,6,8,10]));
