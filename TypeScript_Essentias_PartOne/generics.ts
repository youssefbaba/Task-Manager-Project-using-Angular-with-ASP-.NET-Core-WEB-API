// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    let newArray = [value, ...array];
    return newArray;
}

let numberArray = insertAtBeginning([1, 2, 3], 0);

//numberArray[0].split('');

numberArray.forEach(item => {
    console.log(item);
});

let stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

stringArray.forEach(item => {
    console.log(item);
});