function employee(input) {
  let person = {};

  for (let employee of input) {
    person.name = employee;
    person.personsID = employee.length;
    console.log(`Name: ${person.name} -- Personal Number: ${person.personsID}`);
  }
}

employee([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
