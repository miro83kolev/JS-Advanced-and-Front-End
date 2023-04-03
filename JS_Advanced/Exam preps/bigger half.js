function biggerHalf(input) {
  const newArr = input;
  let startingIndex = Math.ceil(input.length / 2);
  newArr.sort((a, b) => a - b);
  if (input.length % 2 === 0) {
    newArr.splice(0, startingIndex);
  } else {
    newArr.splice(0, startingIndex - 1);
  }
  console.log(newArr);
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
