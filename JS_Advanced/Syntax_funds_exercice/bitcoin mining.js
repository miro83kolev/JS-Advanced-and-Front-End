function bitcoin(goldArr) {
  const bitcoinPrice = 11949.16;
  const goldPricePerGram = 67.51;
  let totalMoney = 0;
  let dayBought;
  let bitcoinsCount = 0;

  for (let day = 0; day < goldArr.length; day++) {
    let currentDay = day + 1;
    let currentGold = goldArr[day];
    if (currentDay % 3 === 0) {
      currentGold *= 0.7;
    }
    totalMoney += currentGold * goldPricePerGram;
    while (totalMoney >= bitcoinPrice) {
      totalMoney -= bitcoinPrice;
      if (bitcoinsCount === 0) {
        dayBought = currentDay;
      }
      bitcoinsCount += 1;
    }
  }
  console.log(`Bought bitcoins: ${bitcoinsCount}`);
  if (dayBought) {
    console.log(`Day of the first purchased bitcoin: ${dayBought}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoin([100, 200, 300]);