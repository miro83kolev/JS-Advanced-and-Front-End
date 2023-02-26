function oddEvenSum(num) {
  let numToString = num.toString();
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < numToString.length; i++) {
    if (Number(numToString[i] % 2 === 0)) {
      evenSum += Number(numToString[i]);
    } else {
      oddSum += Number(numToString[i]);
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);
