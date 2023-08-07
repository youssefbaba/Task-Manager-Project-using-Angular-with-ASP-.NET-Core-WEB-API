// Scope of variables

// var variable will be hoisted up , which means you can access it before it is declared in the code.
// let variable is not be hoisted up.

console.log("Before global level variables: ")
console.log(`Global variable: ${numberOne}`); // Accessible => Undefined
//console.log(`Global variable: ${numberTwo}`); // Not Accessible
var numberOne = 10; // global variables ( whish is available everywhere in the entire program )
let numberTwo = 20; // global variables ( whish is available everywhere in the entire program )
console.log("After global level variables: ")
console.log(`Global variable: ${numberOne}`); // Accessible => 10
console.log(`Global variable: ${numberTwo}`); // Accessible => 20

function myFunction(value) { // local variable ( whish is available in the same function only )
    console.log("Before local level variables: ")
    console.log(`Global variable: ${numberOne}`); // Accessible => 10
    console.log(`Global variable: ${numberTwo}`); // Accessible => 20
    console.log(`Local variable: ${value}`); // Accessible => 15
    console.log(`Local variable: ${numberThree}`); // Accessible => Undefined
    //console.log(`Local variable: ${numberFour}`); // Not Accessible

    value = 35;
    var numberThree = 40; // local variable ( whish is available in the same function only )
    let numberFour = 50; // local variable ( whish is available in the same function only )

    console.log("After local level variables: ")
    console.log(`Global variable: ${numberOne}`); // Accessible => 10
    console.log(`Global variable: ${numberTwo}`); // Accessible => 20
    console.log(`Local variable: ${value}`); // Accessible => 35
    console.log(`Local variable: ${numberThree}`); // Accessible => 40
    console.log(`Local variable: ${numberFour}`); // Accessible => 50

    
    if (true) {

        console.log("Before Block level variables: ")
        console.log(`Global variable: ${numberOne}`); // Accessible => 10
        console.log(`Global variable: ${numberTwo}`); // Accessible => 20
        console.log(`Local variable: ${value}`); // Accessible => 35
        console.log(`Local variable: ${numberThree}`); // Accessible => 40
        console.log(`Local variable: ${numberFour}`); // Accessible => 50
        console.log(`Local variable: ${numberFive}`); // Accessible => Undefined
        //console.log(`Block variable: ${numberSix}`); // Not Accessible

        var numberFive = 60; // local variable ( whish is available in the same function only )
        let numberSix = 70;  // block variable ( whish is available in the same block only )

        console.log("After Block level variables: ")
        console.log(`Global variable: ${numberOne}`); // Accessible => 10
        console.log(`Global variable: ${numberTwo}`); // Accessible => 20
        console.log(`Local variable: ${value}`); // Accessible => 35
        console.log(`Local variable: ${numberThree}`); // Accessible => 40
        console.log(`Local variable: ${numberFour}`); // Accessible => 50
        console.log(`Local variable: ${numberFive}`); // Accessible => 60
        console.log(`Block variable: ${numberSix}`); // Accessible => 70
    }
    
    console.log("After Block level variables - within function: ")
    console.log(`Global variable: ${numberOne}`); // Accessible => 10
    console.log(`Global variable: ${numberTwo}`); // Accessible => 20
    console.log(`Local variable: ${value}`); // Accessible => 35
    console.log(`Local variable: ${numberThree}`); // Accessible => 40
    console.log(`Local variable: ${numberFour}`); // Accessible => 50
    console.log(`Local variable: ${numberFive}`); // Accessible => 60
    //console.log(`Block variable: ${numberSix}`); // Not  Accessible
}

myFunction(30);

console.log("After global - outside the function: ")
console.log(`Global variable: ${numberOne}`); // Accessible => 10
console.log(`Global variable: ${numberTwo}`); // Accessible => 20
//console.log(`Local variable: ${value}`); // Not Accessible
//console.log(`Local variable: ${numberThree}`); // Not Accessible
//console.log(`Local variable: ${numberFour}`); // Not Accessible
//console.log(`Local variable: ${numberFive}`); // Not Accessible
//console.log(`Block variable: ${numberSix}`); // Not  Accessible