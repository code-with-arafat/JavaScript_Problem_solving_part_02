//Solve Problem 06 in alternative way
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function findAveragePhonePrice(phones){
        let totalPhonePrice = 0;
        //using for of loop 
        for(const phone of phones){
            totalPhonePrice = totalPhonePrice + phone.price
        }

        const totalPhone = phones.length
        const avgPhonePrice = totalPhonePrice / totalPhone

        return avgPhonePrice;

    }

    console.log("Average of total phones price: " + findAveragePhonePrice(phones));