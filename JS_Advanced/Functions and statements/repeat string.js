function repeatString(text, repeat) {
  let output = "";
  for (let i = 0; i < repeat; i++) {
    output += text;
  }
  return output;
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));
