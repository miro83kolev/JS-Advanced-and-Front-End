function orders(drink, quantity) {
  const coffee = 1.5;
  const water = 1.0;
  const coke = 1.4;
  const snacks = 2.0;
  let amount = 0;

  if (drink === "coffee") {
    amount = coffee * quantity;
  } else if (drink === "water") {
    amount = water * quantity;
  } else if (drink === "coke") {
    amount = coke * quantity;
  } else if (drink === "snacks") {
    amount = snacks * quantity;
  }

  return amount.toFixed(2);
}

console.log(orders("water", 5));
console.log(orders("coffee", 2));
