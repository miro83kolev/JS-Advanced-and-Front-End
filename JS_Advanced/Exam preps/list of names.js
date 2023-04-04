function listofNames(input) {
  let sortedArr = input.sort((a, b) => a.localeCompare(b));
  let startingNum = 1;
  sortedArr.forEach((name) => {
    console.log(`${startingNum}.${name}`);
    startingNum++;
  });
}

listofNames(["John", "Bob", "Christina", "Ema"]);
