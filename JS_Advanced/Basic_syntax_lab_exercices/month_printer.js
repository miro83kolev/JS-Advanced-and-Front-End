function monthPrinter(month) {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";

    default:
      return "Error!";
  }
}

console.log(monthPrinter(1));
console.log(monthPrinter(2));
console.log(monthPrinter(5));
console.log(monthPrinter(8));
console.log(monthPrinter(9));
console.log(monthPrinter(10));
console.log(monthPrinter(12));
console.log(monthPrinter(13));
console.log(monthPrinter(0));
