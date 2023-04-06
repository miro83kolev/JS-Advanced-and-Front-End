function studentInfo(studentName, age, avgGrade) {
    return `Name: ${studentName}, Age: ${age}, Grade: ${avgGrade.toFixed(2)}`;
}

console.log(studentInfo('John', 15, 5.54678));
console.log(studentInfo('Steve', 16, 2.1426));
console.log(studentInfo('Marry', 12, 6.00));