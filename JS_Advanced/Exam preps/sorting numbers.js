function sortingNums(input) {
  let sortedNums = input.sort((a, b) => a - b);
  let result = [];

  while (sortedNums.length !== 0) {
    result.push(sortedNums.shift());
    result.push(sortedNums.pop());
  }
  return result;
}

console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
