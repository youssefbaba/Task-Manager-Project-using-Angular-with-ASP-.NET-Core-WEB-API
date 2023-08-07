// Interfaces

interface Human{
    // Properties
    firstName : string;
    lastName: string;
    age: number;

    // Methods
    getFullName(): string;
    greet(): void;
}

// Create an object of type Human

let person : Human = {
    firstName: 'Max',
    lastName: 'Allen',
    age: 43,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet() {
        console.log(`Hi ${this.getFullName()}`);
    },
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.getFullName());
console.log(person.greet());


interface Employee{
    // Properties
    fullName: string;
    age: number;
    salary: number;

    // Methods
    promote(): void;
}

class Developer implements Employee{

    // Properties
    fullName: string;
    age: number;
    salary: number;
    
    // Methods
    promote(): void {
        console.log("Congratulation!!");
    }
}

let developer : Developer = new Developer();
developer.fullName = 'David Moore';
developer.age = 50;
developer.salary = 5000;
console.log(developer);
