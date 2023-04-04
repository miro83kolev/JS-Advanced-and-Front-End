function rotateEl(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let lastEl = arr.pop();
    arr.unshift(lastEl);
  }
  console.log(arr.join(" "));
}

rotateEl(["1", "2", "3", "4"], 2);
