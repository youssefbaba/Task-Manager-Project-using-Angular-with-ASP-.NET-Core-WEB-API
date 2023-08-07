// Type Aliases

type Person = { // type alias
    name: string,
    age: number
}

let personOne : Person;

personOne = {
    name: 'Adam Allen',
    age: 45
}

let personTwo : Person = {
    name: 'Robert Davis',
    age: 30
};

let people : Person[] = [personOne, personTwo];
