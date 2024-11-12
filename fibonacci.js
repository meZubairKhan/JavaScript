// Fibonacci Series ***********************************************
let num1 = 0;
let num2 = 1;

function fibCalculator() {
    for (let i = 0; i < 10; i++) {
        console.log(num1 + ', ' + num2);
        num1 = num1 + num2; 
        num2 = num1 + num2;
    }

}

fibCalculator();