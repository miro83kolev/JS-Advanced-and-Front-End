function pascalCaseSplitter(text){
  let word = text.split(/(?=[A-Z])/);
  console.log(word.join(", "))
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
