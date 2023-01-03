function fruit(fruitType, grams, pricePerKilo) {
    let fruitToKg = grams / 1000
    let finalPrice = fruitToKg * pricePerKilo

    console.log(`I need $${finalPrice.toFixed(2)} to buy ${fruitToKg.toFixed(2)} kilograms ${fruitType}.`)
}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)