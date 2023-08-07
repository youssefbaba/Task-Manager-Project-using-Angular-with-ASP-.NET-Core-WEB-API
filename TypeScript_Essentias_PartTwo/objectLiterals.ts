// Object Literals

let student: { studentId: number, studentName: string, marks: number, getResult(): string } = {  // Literal Object
    studentId: 101,
    studentName: "Scott",
    marks: 80,
    getResult(): string {
        if (this.marks >= 35) {
            return 'Pass';
        } else {
            return 'Fail';
        }
    }
};

console.log(student.studentId);
console.log(student.studentName);
console.log(student.marks);
console.log(student.getResult());
//student.email = 'Scott@gmail.com'; // Error: Property email doesn't exist on type { studentId: number, studentName: string, marks: number, getResult(): string }

let car = {  // // Literal Object + Type Inference
    carNumber: 1234,
    carModule: "Ford",
    carPrice: 80000,
    start(): void {
        console.log("Start");
    },
    stop(): void {
        console.log("Stop");
    }
};

console.log(car.carNumber);
console.log(car.carModule);
console.log(car.carPrice);
console.log(car.start());
console.log(car.stop());
//car.carColor = 'Black'; // Error: Property carColor doesn't exist on type { carNumber: number, carModule: string, carPrice: number, start(): void, stop(): void }


let person: any = {
    name: 'David Allen',
    age: 24,
    greet(): string {
        return `Hi ${this.name}`;
    }
}

console.log(person.name);
console.log(person.age);
console.log(person.greet());
person.email = 'David@gmail.com';
console.log(person.email);


