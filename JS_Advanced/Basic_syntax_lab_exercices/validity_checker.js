function validityChecker(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
 
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
 
    
    function result(x1, y1, x2, y2) {
        const distance =  Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        const validString = Number.isInteger(distance)?'valid':'invalid';
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validString}`)
    }

    result(x1, y1, 0, 0);

    result(x2, y2, 0, 0);

    result(x1, y1, x2, y2);
}

validityChecker(3, 0, 0, 4)