function smallest2 (input) {
    let result = [];
    let sortedArr = input.sort((a, b) => a - b);
    result.push(sortedArr[0]);
    result.push(sortedArr[1]);
    return result.join(' ');
}

console.log(smallest2([30, 15, 50, 5]))
console.log(smallest2([3, 0, 10, 4, 7, 3]))