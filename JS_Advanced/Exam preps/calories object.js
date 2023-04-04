function caloriesObj(input) {
  let obj = {};
  let inputL = input.length;

  for (let index = 0; index < inputL; index += 2) {
    let objName = input[index];
    let objValue = Number(input[index + 1]);
    obj[objName] = objValue;
  }

  console.log(obj);
}
