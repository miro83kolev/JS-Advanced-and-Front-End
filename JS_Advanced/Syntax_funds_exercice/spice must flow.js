function spice(startingYield) {
  let days = 0;
  let totalAmount = 0;

  while (startingYield >= 100) {
    totalAmount += startingYield;
    startingYield -= 10;
    days++;

    if (totalAmount >= 26) {
      totalAmount -= 26;
    }
  }

  if (totalAmount >= 26) {
    totalAmount -= 26;
  }
  console.log(days);
  console.log(totalAmount);
}

spice(111);
spice(450);