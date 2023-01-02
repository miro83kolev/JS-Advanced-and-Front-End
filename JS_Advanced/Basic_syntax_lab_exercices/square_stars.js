function squareStars(num) {
    let numberSquare = num;
    let stringSquare = '';

    if (typeof num === 'number') {
        for (let i = 1; i <= numberSquare; i++) {
            for (let j = 1; j <= numberSquare; j++) {
                stringSquare += '* ';
            }
            stringSquare += '\n';
        }
        console.log(stringSquare);
    } else {
        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= 5; j++) {
                stringSquare += '* ';
            }
            stringSquare += '\n';
        }
        console.log(stringSquare);
    }
}

squareStars('ivan')