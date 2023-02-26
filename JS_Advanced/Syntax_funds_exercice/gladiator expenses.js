function gladiator(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let helmetCounter = 0;
  let swordCounter = 0;
  let shieldCounter = 0;
  let armorCounter = 0;
  let finalPrice = 0;

  for (let fight = 1; fight <= lostFights; fight++) {
    if (fight % 2 === 0) {
      helmetCounter++;
      finalPrice += helmetPrice;
    }
    if (fight % 3 === 0) {
      swordCounter++;
      finalPrice += swordPrice;
    }

    if (fight % 2 === 0 && fight % 3 === 0) {
      shieldCounter++;
      finalPrice += shieldPrice;
    }

    if (shieldCounter === 2) {
      armorCounter++;
      finalPrice += armorPrice;
      shieldCounter = 0;
    }
  }

  return `Gladiator expenses: ${finalPrice.toFixed(2)} aureus`;
}

console.log(gladiator(7, 2, 3, 4, 5));
console.log(gladiator(23, 12.5, 21.5, 40, 200));
