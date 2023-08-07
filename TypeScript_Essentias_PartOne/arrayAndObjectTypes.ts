// Array And Object Types

// Array:

let hobbies: string[];

hobbies = ['Sports', 'Cooking', 'Coding'];

let marks: number[] = [50.5, 60.25, 70, 90, 45.5, 53];

hobbies.forEach(hobby => {
    console.log(hobby);
});

marks.forEach(mark => {
    console.log(mark);
});

// Object: ( Literal Object )

//let person : any;  // any type is allowed

let person: {};

person = {
    name: 'Max Jims',
    age: 35
};
console.log(person);

person = {
    isEmployee: true,
    salary: 3000
}
console.log(person);

let student: {  // Literal Object : Declaration without initialization
    studentName: string,
    studentMark: number
};

student = {  // initialization
    studentName: "James Allen",
    studentMark: 65
}
console.log(student);

/*
student = {  // Error because literal student object doesn't contain isPass member
    studenName: "James Allen",
    isPass = true
}
*/

let car: { carrNumber: number, carModule: string, carColor: string } =    // Literal Object : Declaration and initialization
{
    carrNumber: 1234,
    carModule: 'Ford',
    carColor: 'Black'
};
console.log(car);

let students: {
    studentName: string,
    studentMark: number
}[];

students = [
    {
        studentName: "John Adams",
        studentMark: 50.5
    },
    {
        studentName: "Robert Miller",
        studentMark: 70
    }
]


let cars: { carrNumber: number, carModule: string, carColor: string }[] = [
    {
        carrNumber: 5487,
        carModule: 'Ford',
        carColor: 'White'
    },
    {
        carrNumber: 3576,
        carModule: 'Jeep',
        carColor: 'Blue'
    },
    {
        carrNumber: 3891,
        carModule: 'Chevrolet',
        carColor: 'Red'
    }
]