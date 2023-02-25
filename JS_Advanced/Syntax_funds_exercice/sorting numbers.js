function sortNums(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let newArray = [];

  while (sortedArr.length > 0) {
    newArray.push(sortedArr.shift());
    newArray.push(sortedArr.pop());
  }

  return newArray;
}
