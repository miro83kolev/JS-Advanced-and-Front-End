function listOfNames(input) {
  let sortedNames = input.sort((a, b) => a.localeCompare(b));

  for (let [i, value] of sortedNames.entries()) {
    console.log(`${i + 1}.${value}`);
  }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
