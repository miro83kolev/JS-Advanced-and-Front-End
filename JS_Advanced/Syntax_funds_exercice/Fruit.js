function fruit(fruit, grams, price) {
  let kilos = grams / 1000;
  let finalPrice = price * kilos;
  console.log(
    `I need $${finalPrice.toFixed(2)} to buy ${kilos.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);