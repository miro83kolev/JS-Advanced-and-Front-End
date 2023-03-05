function convertToJSON(fistName, lastName, hairColor) {
  let person = {
    name: fistName,
    lastName: lastName,
    hairColor: hairColor,
  };

  console.log(JSON.stringify(person));
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');