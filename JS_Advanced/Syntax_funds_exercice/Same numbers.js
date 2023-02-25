function sameNums(num) {
  let numString = num.toString();
  let firstNum = Number(numString[0]);
  let sum = 0;
  let output = "";
  for (let i = 0; i < numString.length; i++) {
    if (firstNum === Number(numString[i])) {
      sum += firstNum;
      output += numString[i];
    } else {
      sum += Number(numString[i]);
    }
  }

  if (output === numString) {
    console.log(true);
    console.log(sum);
  } else {
    console.log(false);
    console.log(sum);
  }
}

sameNums(2222222);
sameNums(1234);
