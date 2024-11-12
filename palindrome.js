// Check if the given string is Palindrome ***********************************************
let string = prompt("Enter the string of your choice!");

function palindrome() {
    string = string.toLowerCase();

    if(string[0] === string[string.length - 1]) {
        console.log(`The String "${string}" is PALINDROME!`);
    }

    else {
        console.log(`The String "${string}" is NOT Palindrome!`);
    }
}

palindrome();