function palindrome(input) {
  for (num of input) {
    let numToString = num.toString();
    let firstNum = Number(numToString.slice(0, 1));
    let lastNum = Number(numToString.slice(-1));
    if (firstNum === lastNum) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

palindrome([123, 323, 421, 121]);
palindrome([32, 2, 232, 1010]);
