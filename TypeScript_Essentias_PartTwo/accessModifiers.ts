// Access Modifiers

// by default all properties and methods of class are public

class Person {

    // Properties
    private personName: string; // accessible only within the same class
    age: number;
    protected designation: string // accessible only within the same class and its childclass

    // Constructor
    constructor(personName: string, age: number, designation: string) {
        this.personName = personName;
        this.age = age;
        this.designation = designation;
    }

    // Methods
    getPersonName(): string {
        return this.personName;
    }
}

class Employee extends Person {

    // Properties
    salary: number;
    isActive: boolean;

    // Constructor
    constructor(personName: string, age: number, designation: string, salary: number, isActive: boolean) {
        super(personName, age, designation);
        this.salary = salary;
        this.isActive = isActive;
        //console.log(super.personName); // Error: personName is private and only accessible within the Person class  
        console.log(this.getPersonName());
        console.log(this.designation); 
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

    getDesignation(): string{
        return this.designation;
    }
}

// Objects
let employeeOne: Employee = new Employee('Daniel Taylor', 43, "Developer", 15000, true);
let employeeTwo: Employee = new Employee('Paul Wilson', 35, "Clerk", 8000, true);
let employeeThree: Employee = new Employee('Mark Carter', 41, "Asst.Manger", 5000, false);

let employees: Employee[] = [employeeOne, employeeTwo, employeeThree];  // Array of objects

// To add a new employee to the array of employees
employees.push(new Employee('Joseph Mille', 52, "Designer", 11000, true));

// To display ell  employee one by one
for (let i = 0; i < employees.length; i++) {
    console.log(`Employee${i + 1}: `);
    //console.log(employees[i].personName); // Error: personName is private and only accessible within the Person class
    console.log(employees[i].getPersonName());
    console.log(employees[i].age);
    //console.log(employees[i].designation); // Error: designation is protected and only accessible within class Person and its subclass
    console.log(employees[i].getDesignation());
    console.log(employees[i].salary);
    console.log(employees[i].isActive);
    console.log(employees[i].getNetSalary());
}