function addRemove(commands) {
  let output = [];

  for (let i = 0; i < commands.length; i++) {
    let currentCommand = commands[i];
    if (currentCommand === "add") {
      output.push(i + 1);
    } else if (currentCommand === "remove") {
      output.pop();
    }
  }

  if (output.length === 0) {
    console.log("Empty");
  } else {
    console.log(output.join("\n"));
  }
}

//addRemove(['add',
//'add',
//'add',
//'add']
//)

addRemove(["add", "add", "remove", "add", "add"]);

///addRemove(['remove',
///'remove',
//'remove']
//)
