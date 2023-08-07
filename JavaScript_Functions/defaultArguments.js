// Default Arguments (optional Arguments)

// Function definition

// function that calculates net price based on the given price and tax rates
function getNetPrice(price, taxRate = 18){
    let netPrice = price  + (price * (taxRate / 100));
    return netPrice;
}

// Function call
let netPriceOfProductOne = getNetPrice(1000, 10);
console.log(netPriceOfProductOne);
let netPriceOfProductTwo = getNetPrice(5600, 15);
console.log(netPriceOfProductTwo);
let netPriceOfProductThree = getNetPrice(2000);
console.log(netPriceOfProductThree);



