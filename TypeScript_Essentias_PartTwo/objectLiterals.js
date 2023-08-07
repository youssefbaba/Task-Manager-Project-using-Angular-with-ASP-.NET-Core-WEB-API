// Object Literals
var student = {
    studentId: 101,
    studentName: "Scott",
    marks: 80,
    getResult: function () {
        if (this.marks >= 35) {
            return 'Pass';
        }
        else {
            return 'Fail';
        }
    }
};
console.log(student.studentId);
console.log(student.studentName);
console.log(student.marks);
console.log(student.getResult());
//student.email = 'Scott@gmail.com'; // Error: Property email doesn't exist on type { studentId: number, studentName: string, marks: number, getResult(): string }
var car = {
    carNumber: 1234,
    carModule: "Ford",
    carPrice: 80000,
    start: function () {
        console.log("Start");
    },
    stop: function () {
        console.log("Stop");
    }
};
console.log(car.carNumber);
console.log(car.carModule);
console.log(car.carPrice);
console.log(car.start());
console.log(car.stop());
//car.carColor = 'Black'; // Error: Property carColor doesn't exist on type { carNumber: number, carModule: string, carPrice: number, start(): void, stop(): void }
var person = {
    name: 'David Allen',
    age: 24,
    greet: function () {
        return "Hi ".concat(this.name);
    }
};
console.log(person.name);
console.log(person.age);
console.log(person.greet());
person.email = 'David@gmail.com';
console.log(person.email);
