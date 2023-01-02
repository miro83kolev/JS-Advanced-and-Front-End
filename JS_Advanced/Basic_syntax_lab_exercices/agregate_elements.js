function aggElements(input) {
    let numbersArray = input.map(Number);
    let sum = numbersArray.reduce((a, b) => a + b);
    let inverseSum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        inverseSum += 1 / numbersArray[i];
    }

    let concatNumbers = numbersArray.join('');

    console.log(sum);
    console.log(inverseSum);
    console.log(concatNumbers);

}

aggElements([1, 2, 3])
aggElements([2, 4, 8, 16])