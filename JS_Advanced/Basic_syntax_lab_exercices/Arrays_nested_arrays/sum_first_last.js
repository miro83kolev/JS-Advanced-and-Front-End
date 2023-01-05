function sumFirstLast(input) {
    let firstNum = Number(input.shift());
    let lastNum = Number(input.pop());
    let sum = firstNum + lastNum;

    return sum;
}
console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));