function theater(day, age) {
  switch (day) {
    case "Weekday":
      if (0 <= age && age <= 18) {
        return "12$";
      } else if (18 < age && age <= 64) {
        return "18$";
      } else if (64 < age && age <= 122) {
        return "12$";
      } else {
        return "Error!";
      }
    case "Weekend":
      if (0 <= age && age <= 18) {
        return "15$";
      } else if (18 < age && age <= 64) {
        return "20$";
      } else if (64 < age && age <= 122) {
        return "15$";
      } else {
        return "Error!";
      }
    case "Holiday":
      if (0 <= age && age <= 18) {
        return "5$";
      } else if (18 < age && age <= 64) {
        return "12$";
      } else if (64 < age && age <= 122) {
        return "10$";
      } else {
        return "Error!";
      }
  }
}

console.log(theater("Weekday", 42));
console.log(theater("Holiday", -12));
console.log(theater("Holiday", 15));
