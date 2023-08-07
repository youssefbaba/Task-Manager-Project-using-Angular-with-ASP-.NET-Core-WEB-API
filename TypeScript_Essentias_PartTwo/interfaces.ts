// Interfaces

interface IEmployee {
    // Properties
    salary: number;  // abstract property and it is public by default

    // Methods
    getTax(): number;  // abstract method and it is public by default
}

// To create a class that implements the IEmployee interface

class Employee implements IEmployee {
    // Properties
    salary: number; // Implement salary property of IEmployee interface

    // Methods
    getTax(): number {  // Implement getTax() method of IEmployee interface
        return this.salary * (10 / 100);
    }
}

// To create an object

// first way by using class:
let employeeOne: Employee = new Employee();
employeeOne.salary = 5000;
console.log(employeeOne.salary);
console.log(employeeOne.getTax());

// second way by using interface:
let employeeTwo: IEmployee = {
    salary: 2500,
    getTax(): number {
        return this.salary * (15 / 100);
    }
}
console.log(employeeTwo.salary);
console.log(employeeTwo.getTax());

