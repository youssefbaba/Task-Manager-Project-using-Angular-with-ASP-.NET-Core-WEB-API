export { }

// Inheritance
class Animal {

    // Properties
    name: string;

    // Constructor
    constructor(name: string) {
        this.name = name;
    }

    // Methods
    makeSound(): void {
        console.log("Animal is making a sound.");
    }
}

class Dog extends Animal {

    // Properties
    breed: string;

    // Constructor
    constructor(name: string, breed: string) {
        super(name); // Call the constructor of the base class
        this.breed = breed;
    }

    // Methods
    makeSound(): void {
        console.log("Woof! Woof!");
    }

    wagTail(): void {
        console.log("Dog is wagging its tail.");
    }
}

// Creating instances of the classes
let animal = new Animal("Generic Animal");
let dog = new Dog("Buddy", "Labrador")

console.log(animal.name);
animal.makeSound();

console.log(dog.name);
console.log(dog.breed);
dog.makeSound();
dog.wagTail();


class Person {

    // Properties
    personName: string;
    age: number;

    // Constructor
    constructor(personName: string, age: number) {
        this.personName = personName;
        this.age = age;
    }
}

class Employee extends Person {

    // Properties
    salary: number;
    isActive: boolean;

    // Constructor
    constructor(personName: string, age: number, salary: number, isActive: boolean) {
        super(personName, age);
        this.salary = salary;
        this.isActive = isActive;
    }

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
let employeeOne: Employee = new Employee('Daniel Taylor', 43, 15000, true);
let employeeTwo: Employee = new Employee('Paul Wilson', 35, 8000, true);
let employeeThree: Employee = new Employee('Mark Carter', 41, 5000, false);

let employees: Employee[] = [employeeOne, employeeTwo, employeeThree];  // Array of objects

// To add a new employee to the array of employees
employees.push(new Employee('Joseph Mille', 52, 11000, true));

// To display ell  employee one by one
for (let i = 0; i < employees.length; i++) {
    console.log(`Employee${i + 1}: `);
    console.log(employees[i].personName);
    console.log(employees[i].age);
    console.log(employees[i].salary);
    console.log(employees[i].isActive);
    console.log(employees[i].getNetSalary());
}









