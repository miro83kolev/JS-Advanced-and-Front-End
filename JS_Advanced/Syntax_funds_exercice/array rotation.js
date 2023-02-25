function arrayRotate(input, rotations) {
  for (let i = 0; i < rotations; i++) {
    let currentNum = input.shift();
    input.push(currentNum);
  }

  console.log(input.join(" "));
}

arrayRotate([51, 47, 32, 61, 21], 2);
arrayRotate([32, 21, 61, 1], 4);
arrayRotate([2, 4, 15, 31], 5);