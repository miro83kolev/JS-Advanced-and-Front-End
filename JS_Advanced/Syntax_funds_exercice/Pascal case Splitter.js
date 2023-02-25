function pascalCaseSplitter(text) {
  let arr = [];
  let wordsLine = text;
  let regex = new RegExp(/[A-Z][a-z]+/g);
  arr = wordsLine.match(regex);
  console.log(arr.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
