function previousDay(year, month, day) {
    let dateInput = `${year}-${month}-${day}`;
    let newDate = new Date(dateInput);
    newDate.setDate(newDate.getDate() - 1);
    console.log(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`);
}

previousDay(2016, 10, 1)