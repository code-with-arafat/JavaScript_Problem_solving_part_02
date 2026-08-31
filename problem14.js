//Find the Most Expensive Product
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Monitor", price: 15000 },
    { name: "Keyboard", price: 2000 },
    { name: "Tablet", price: 25000 }
];

let expensiveProduct = products[0];

for (const product of products) {
    if (product.price > expensiveProduct.price) {
        expensiveProduct = product;
    }
}

console.log(expensiveProduct);