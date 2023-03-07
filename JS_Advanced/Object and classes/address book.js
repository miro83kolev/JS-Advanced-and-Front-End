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

