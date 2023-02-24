function reverse(n, input) {
  let newArr = [];

  for (let i = 0; i < n; i++) {
    newArr.push(Number(input[i]));
  }

  let reversed = "";

  for (let i = newArr.length - 1; i >= 0; i--) {
    reversed += newArr[i] + ' ';
  }

  console.log(reversed);
}

reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
