// Arrow Function (automatic return)

/*
let add = (numberOne, numberTwo) =>
{
    return numberOne + numberTwoconsole.log(isEven(7))

*/
let add = (numberOne, numberTwo) => (numberOne + numberTwo);

console.log(add(10, 3)); // 13

/*
let isEven = (value) =>
{
    return (value % 2 == 0);
*/
let isEven = (value) => (value % 2 == 0);
console.log(isEven(7)); // False
console.log(isEven(6)); // True