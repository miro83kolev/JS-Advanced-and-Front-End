function carWash(commands) {
    let clean = 0;
    for (const command of commands) {
      switch (command) {
        case "soap":
          soap();
          break;
        case "water":
          water();
          break;
        case "vacuum cleaner":
          vacuum();
          break;
        case "mud":
          mud();
          break;
      }
    }
  
    function soap() {
      clean += 10;
    }
    function water() {
      clean += clean * 0.2;
    }
    function vacuum() {
      clean += clean * 0.25;
    }
    function mud() {
      clean -= clean * 0.1;
    }
  
    console.log(`The car is ${clean.toFixed(2)}% clean.`);
  }