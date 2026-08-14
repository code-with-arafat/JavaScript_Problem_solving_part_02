//find the lowest number
const heights2 = [167,190,120,165,137]
function findLowestNumber(heights2){
    let number = heights2[0]
    for(const lowestNumber of heights2)
        if(lowestNumber < number){
            number = (lowestNumber)
        }
        return number;
}

console.log(findLowestNumber(heights2));