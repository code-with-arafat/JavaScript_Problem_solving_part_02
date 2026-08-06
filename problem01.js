//Count how many times a number(5) is repeated in the array
const numbers = [5,6,11,12,98, 5,10,5,13,5]

function countRepeatedNumbers(numbers) {
    let = count = 0;
    for(const number of numbers){
        if (number === 5) {
            count = count + 1  
        }
    }

    return count;
}

const result = countRepeatedNumbers(numbers);
console.log("5 is repeated "+ result + " times in this array");