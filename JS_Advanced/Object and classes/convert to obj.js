function convertToObj(jsonStr) {
  let person = JSON.parse(jsonStr);

  for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
