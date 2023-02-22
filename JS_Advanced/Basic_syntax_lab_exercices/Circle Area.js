function circleArea(input) {
  let result = 0;
  if (typeof input === "number") {
    result = Number(input) * Number(input) * Math.PI;
    return result.toFixed(2);
  } else {
    return `We can not calculate the circle area, because we receive a ${typeof input}.`;
  }
}

console.log(circleArea(5));
console.log(circleArea("name"));
