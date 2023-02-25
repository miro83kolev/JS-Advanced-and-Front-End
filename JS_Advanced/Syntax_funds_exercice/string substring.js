function substring(searchedWord, text) {
  let textarr = text.split(" ");
  let isFound = false;
  for (let word of textarr) {
    if (word.toLowerCase() === searchedWord) {
      isFound = true;
      break;
    }
  }
  if (!isFound) {
    console.log(`${searchedWord} not found!`);
  } else {
    console.log(searchedWord);
  }
}
substring("javascript", "JavaScript is the best programming language");
substring("python", "JavaScript is the best programming language");
