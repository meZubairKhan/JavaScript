// Reversing String ***********************************************
let string = prompt("Please enter the string og your choice:");
let reverse = '';

function reverseString(s) {
    for (let i = s.length - 1; i >= 0; i--) {
        reverse += string[i];
    }

    return reverse;
}

console.log(reverseString(string));