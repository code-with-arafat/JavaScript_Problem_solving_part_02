//Find the smallest name in an array
const names = ['rahim','robin','rafi','ron','rashed']
function smallestName(names){
    let name = names[0]
    for(const smallName of names){
        if(smallName.length < name.length){
            name = smallName
        }
    }
    return name
}

console.log(smallestName(names));