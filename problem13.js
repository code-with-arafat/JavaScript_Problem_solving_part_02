const users = [
    { name: "Arafat", age: 23 },
    { name: "Rahim", age: 17 },
    { name: "Karim", age: 25 },
    { name: "Hasan", age: 16 },
    { name: "Sabbir", age: 20 }
];

const adultUsers = [];

for (const user of users) {
    if (user.age >= 18) {
        adultUsers.push(user.name);
    }
}

console.log(adultUsers);