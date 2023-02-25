function cookingByNums(num1, ...opers) {
  num1 = Number(num1);

  for (let oper of opers) {
    if (oper === "chop") {
      num1 /= 2;
    } else if (oper === "dice") {
      num1 = Math.sqrt(num1);
    } else if (oper === "spice") {
      num1++;
    } else if (oper === "bake") {
      num1 *= 3;
    } else if (oper === "fillet") {
      num1 -= num1 * 0.2;
    }
    console.log(num1);
  }
}

cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNums("9", "dice", "spice", "chop", "bake", "fillet");