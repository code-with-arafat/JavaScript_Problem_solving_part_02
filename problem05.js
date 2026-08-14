const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

function calculateElectronicsBudget(laptopQuantity,tabletQuantity,mobileQuantity){
    const LaptopPrice = laptop * laptopQuantity
    const tabletPrice = tablet * tabletQuantity
    const mobilePrice = mobile * mobileQuantity

    const totalPrice = LaptopPrice + tabletPrice + mobilePrice
    return totalPrice;
}

console.log(calculateElectronicsBudget(1,2,4));