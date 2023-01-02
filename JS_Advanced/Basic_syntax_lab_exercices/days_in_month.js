function daysInMonth(num1, num2) {
    let month = Number(num1);
    let year = Number(num2);

    return new Date(year, month, 0).getDate();

}

console.log(daysInMonth(2, 2021))