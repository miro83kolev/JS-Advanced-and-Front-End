function charsInRange(char1, char2) {
  let arrChars = [];
  let start = char1.charCodeAt(0);
  let end = char2.charCodeAt(0);
  if (start < end) {
    for (let i = start + 1; i < end; i++) {
      let newChar = String.fromCharCode(i);
      arrChars.push(newChar);
    }
    console.log(arrChars.join(" "));
  } else {
    for (let i = end + 1; i < start; i++) {
      let newChar = String.fromCharCode(i);
      arrChars.push(newChar);
    }
    console.log(arrChars.join(" "));
  }
}

charsInRange("a", "d");
charsInRange("#", ":");
charsInRange("C", "#");
