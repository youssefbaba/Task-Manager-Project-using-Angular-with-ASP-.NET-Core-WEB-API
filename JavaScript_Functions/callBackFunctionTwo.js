// Callback functions

function callBackFunctionOne(name, age) {
    console.log(`Callback 1: Name is ${name}, Age is ${age} years old`);
}

function callBackFunctionTwo(name, age) {
    console.log(`Callback 2: Age is ${age} years old, Name is ${name}`);
}

function doWork(name, age, myFunctionRef) {
    name = "Mr " + name;
    age++;
    // callBackFunctionOne(name, age);
    //callBackFunctionTwo(name);
    myFunctionRef(name, age);
}

//doWork("Adam Smith", 20, callBackFunctionOne);
doWork("Adam Smith", 20, callBackFunctionTwo);


function priceWithTax(price) {
    let netPrice = price  + (price * 0.2);
    return netPrice;
}

function priceWithoutTax(price) {
    return price;
}

function getNetPrice(price, myFunctionRef) {
    if (price > 500) {
        let result = myFunctionRef(price);
        console.log(`Net price with tax : ${result} $`)
    } else {
        let result = myFunctionRef(price);
        console.log(`Net price without tax : ${result} $`)
    }
}

// getNetPrice(2000, priceWithTax);
getNetPrice(200, priceWithoutTax);