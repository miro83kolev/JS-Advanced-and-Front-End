function piece(input, string1, string2) {
  let result = [];
  let indices = [];
  for (let sentence of input) {
    if (sentence.includes(string1)) {
      let start = input.indexOf(string1);
      indices.push(start);
    } else if (sentence.includes(string2)) {
      let end = input.indexOf(string2);
      indices.push(end);
    }
  }

  let [start, end] = indices;
  result = input.splice(start, end);
  console.log(result);
}

piece(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);

piece(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
