const numbers = [10, 15, 20, 25, 30, 35];
const evenNumbers = [];

for (const number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}

console.log(evenNumbers);