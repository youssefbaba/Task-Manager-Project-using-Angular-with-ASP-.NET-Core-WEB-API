// Classes

class Employee {
    // Properties
    employeeName: string;
    salary: number;
    isActive: boolean;

    // Methods
    getNetSalary(): number {
        let netSalary: number;
        if (this.isActive) {
            if (this.salary < 10000) {
                netSalary = this.salary - (this.salary * (10 / 100));
            } else {
                netSalary = this.salary - (this.salary * (15 / 100));
            }
        } else {
            netSalary = 0;
        }
        return netSalary;
    }
}

// Objects
let employeeOne: Employee = new Employee();
employeeOne.employeeName = 'Daniel Taylor';
employeeOne.salary = 15000;
employeeOne.isActive = true;
console.log(employeeOne);
console.log(employeeOne.getNetSalary());

let employeeTwo: Employee = new Employee();
employeeTwo.employeeName = 'Paul Wilson';
employeeTwo.salary = 8000;
employeeTwo.isActive = true;
console.log(employeeTwo);
console.log(employeeTwo.getNetSalary());


class Person {
    // Properties
    firstName: string;
    lastName: string;
    age: number;

    // Constructor
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };

    // Methods
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let personOne : Person = new Person('John', 'Doe', 26);
console.log(personOne.firstName);
console.log(personOne.lastName);
console.log(personOne.age);
console.log(personOne.getFullName());




