//A function to count the number of vowels in a string.
function countVowels(str){
    const vowels = "aeiouAEIOU"
    let count = 0;

    for(let char of str){
        if(vowels.includes(char)){
            count = count +1;
        }
    }

    return count;
}

const strg = "Hello JavaScript"
const vowel = countVowels(strg)
console.log(`Vowels Of ${strg}: ${vowel}`);