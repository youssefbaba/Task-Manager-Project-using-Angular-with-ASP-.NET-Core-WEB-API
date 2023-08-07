// Array And Object Types
// Array:
var hobbies;
hobbies = ['Sports', 'Cooking', 'Coding'];
var marks = [50.5, 60.25, 70, 90, 45.5, 53];
hobbies.forEach(function (hobby) {
    console.log(hobby);
});
marks.forEach(function (mark) {
    console.log(mark);
});
// Object: ( Literal Object )
//let person : any;  // any type is allowed
var person;
person = {
    name: 'Max Jims',
    age: 35
};
console.log(person);
person = {
    isEmployee: true,
    salary: 3000
};
console.log(person);
var student;
student = {
    studentName: "James Allen",
    studentMark: 65
};
console.log(student);
/*
student = {  // Error because literal student object doesn't contain isPass member
    studenName: "James Allen",
    isPass = true
}
*/
var car = // Literal Object : Declaration and initialization
 {
    carrNumber: 1234,
    carModule: 'Ford',
    carColor: 'Black'
};
console.log(car);
var students;
students = [
    {
        studentName: "John Adams",
        studentMark: 50.5
    },
    {
        studentName: "Robert Miller",
        studentMark: 70
    }
];
var cars = [
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
];
