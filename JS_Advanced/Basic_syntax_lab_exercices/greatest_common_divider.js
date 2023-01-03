function gcd(num1, num2) {
    while (num2) {
        let num3 = num2;
        num2 = num1 % num3;
        num1 = num3;
    }
    return num1
}

console.log(gcd(2154, 458));