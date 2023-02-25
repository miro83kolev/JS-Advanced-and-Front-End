function vacation(group, typeOfGroup, day) {
  let finalPrice = 0;
  switch (typeOfGroup) {
    case "Students":
      switch (day) {
        case "Friday":
          finalPrice = group * 8.45;
          if (group >= 30) {
            finalPrice *= 0.85;
          }
          break;
        case "Saturday":
          finalPrice = group * 9.8;
          if (group >= 30) {
            finalPrice *= 0.85;
          }
          break;
        case "Sunday":
          finalPrice = group * 10.46;
          if (group >= 30) {
            finalPrice *= 0.85;
          }
          break;
      }
      break;
    case "Business":
      switch (day) {
        case "Friday":
          finalPrice = group * 10.9;
          if (group >= 100) {
            finalPrice = (group - 10) * 10.9;
          }
          break;
        case "Saturday":
          finalPrice = group * 15.6;
          if (group >= 100) {
            finalPrice = (group - 10) * 15.6;
          }
          break;
        case "Sunday":
          finalPrice = group * 16;
          if (group >= 100) {
            finalPrice = (group - 10) * 16;
          }
          break;
      }
      break;

    case "Regular":
      switch (day) {
        case "Friday":
          finalPrice = group * 15;
          if (group >= 10 && group <= 20) {
            finalPrice *= 0.95;
          }
          break;
        case "Saturday":
          finalPrice = group * 20;
          if (group >= 10 && group <= 20) {
            finalPrice *= 0.95;
          }
          break;
        case "Sunday":
          finalPrice = group * 22.5;
          if (group >= 10 && group <= 20) {
            finalPrice *= 0.95;
          }
          break;
      }
      break;
  }

  console.log(`Total price: ${finalPrice.toFixed(2)}`);
}

vacation(30,
    "Students",
    "Sunday"
    )

vacation(40,
    "Regular",
    "Saturday"
    )