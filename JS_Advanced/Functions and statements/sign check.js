function signChecker(num1, num2, num3) {
  let numsArray = [];
  let negativeCounter = 0;
  numsArray.push(num1);
  numsArray.push(num2);
  numsArray.push(num3);

  for (let num of numsArray) {
    if (num < 0) {
      negativeCounter++;
    }
  }

  if (negativeCounter === 2) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

function singChecker2(num1, num2, num3) {
    return num1 * num2 * num3 ? 'Negative' : 'Positive';
}

console.log(singChecker2(5, -15, 3));

function check (num1, num2, num3) {
    let result = num1 * num2 * num3;
    if (result < 0 ) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}
