function sameNumbers(input) {
    let inputNumber = input.toString();
    let isSame = true;
    let sumDigits = 0;
    let digitsCompare = Number(inputNumber[0])
    const numberLength = inputNumber.length;

    for (let i = 0; i < numberLength; i++) {
        let currentDigit = Number(inputNumber[i]);
        sumDigits += Number(inputNumber[i]);

        if (currentDigit !== digitsCompare) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sumDigits);
}

sameNumbers(2222222)