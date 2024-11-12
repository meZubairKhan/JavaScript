// Finding no of Vowels and Consonents in a string *******************************************
let string = prompt('Please enter the string of your choice:');

console.log(`In the string "${string}", there are:`);

let vowel = 0;
let consonent = 0;

function vowelsCons() {
    for (let i = 0; i < string.length; i++) {
        if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {

            vowel++;
        } else if (string[i] === ' ' || string[i] === '.') {
            // console.log(`White Space`);
        }

        else {
            consonent++;
        }
    }

    console.log(`The vowels are: ${vowel}\nConsonents are: ${consonent}`)

}

vowelsCons();