function addBook(addressBooks) {
  let addObj = {};

  for (let addressBook of addressBooks) {
    let [person, address] = addressBook.split(":");

    if (addObj[person]) {
      addObj[person] = address;
    }
    addObj[person] = address;
  }

  for (let [name, address] of Object.entries(addObj).sort()) {
    console.log(`${name} -> ${address}`);
  }
}

// addBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
// );
addBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)