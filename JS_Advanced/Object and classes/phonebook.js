function phoneBook(input) {
    let phoneBook = {};
    
    // loop through each input string
    input.forEach((string) => {
      let [name, number] = string.split(' ');
      
      // check if name already exists in phone book
      if (phoneBook[name]) {
        // replace phone number for existing name
        phoneBook[name] = number;
      } else {
        // add new name and phone number to phone book
        phoneBook[name] = number;
      }
    });
    
    // loop through phone book and print results
    for (let name in phoneBook) {
      console.log(`${name} -> ${phoneBook[name]}`);
    }
  }

  phoneBook(['Tim 0834212554',
  'Peter 0877547887',
  'Bill 0896543112',
  'Tim 0876566344']
 )