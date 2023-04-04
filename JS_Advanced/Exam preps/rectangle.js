function rectangle(width, height, color) {
  let rectangle = {
    width: Number(width),
    height: Number(height),
    color: color.charAt(0).toUpperCase() + color.slice(1),
    calcArea: () => {
      let area = width * height;
      return area;
    },
  };

  return rectangle;
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
