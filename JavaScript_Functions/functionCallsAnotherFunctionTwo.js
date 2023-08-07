// Call function inside another function

// Function definition
let square = function (number) {
    return number * number;
};

let cube = function (number) {
    return square(number) * number;
}


// Function call
let result = cube(5);
console.log(result);