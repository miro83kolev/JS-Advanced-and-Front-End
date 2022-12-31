function stringLength(str1, str2, str3) {
    let concat = str1 + str2 + str3;
    let avgLength = Math.floor(concat.length / 3);
    console.log(concat.length);
    console.log(avgLength);
}

stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')