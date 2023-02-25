function printNel(arr, step) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += step) {
    let el = arr[i];
    newArray.push(el);
  }
  return newArray;
}

printNel(["5", "20", "31", "4", "20"], 2);
printNel(["dsa", "asd", "test", "tset"], 2);
printNel(["1", "2", "3", "4", "5", "6"], 6);
