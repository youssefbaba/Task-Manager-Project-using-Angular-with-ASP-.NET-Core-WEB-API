// Function Definition
let getSimpleInterest = function (principleAmount, rateOfInterest, numberOfYears) {
    let simpleInterest = (principleAmount * rateOfInterest * numberOfYears) / 100;
    return simpleInterest;
};

function Addition(number1, number2) {
    let result = number1 + number2
    return result;
}   

// Function Call
console.log(getSimpleInterest(1000, 6.7, 3));
let simpleInterestOne = getSimpleInterest(5000, 5.2, 5);
let simpleInterestTwo = getSimpleInterest(7000, 4.5, 10);
console.log(simpleInterestOne);
console.log(simpleInterestTwo);
let addValue = Addition(5, 50);
console.log(addValue);  
console.log(Addition(20, 40));