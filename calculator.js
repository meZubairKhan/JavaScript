// Calculator Program: *****************************************************************
function addition(a, b) {
    return Number(parseFloat(a) + parseFloat(b));
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

let firstNumber = prompt(`Please enter the first number:`);
let secondNumber = prompt(`Please enter the second number:`);
let operator = prompt(`Please choose the operation:\n +, -, *, /`);

if (operator === '+') {
    console.log(addition(firstNumber, secondNumber));
}

else if (operator === '-') {
    console.log(subtraction(firstNumber, secondNumber));
}

else if (operator === '*') {
    console.log(multiplication(firstNumber, secondNumber));
}

else if (operator === '/') {
    console.log(division(firstNumber, secondNumber));
}