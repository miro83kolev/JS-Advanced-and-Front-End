function largestNum(num1, num2, num3) {
    let numbers = [];
    numbers.push(num1);
    numbers.push(num2);
    numbers.push(num3);

    console.log(`The largest number is ${Math.max(...numbers)}.`)
}

largestNum(5, -3, 16)
largestNum(-3, -5, -22.5)

