function countOcc(words, searchedWord) {
  let wordsArr = words.split(" ");
  let counter = 0;

  for (let word of wordsArr) {
    if (word === searchedWord) {
      counter++;
    }
  }

  return counter;
}

console.log(countOcc('This is a word and it also is a sentence',
'is'));
console.log(countOcc('softuni is great place for learning new programming languages',
'softuni'
)); 
