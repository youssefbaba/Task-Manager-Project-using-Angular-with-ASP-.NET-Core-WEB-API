export{}

// Array Of Objects

class Employee {

    // Properties
    employeeName: string;
    salary: number;
    isActive: boolean;

    // Constructor
    constructor(employeeName: string, salary: number, isActive:boolean){
        this.employeeName = employeeName;
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
let employeeOne: Employee = new Employee('Daniel Taylor', 15000, true);
let employeeTwo: Employee = new Employee('Paul Wilson', 8000, true);
let employeeThree: Employee = new Employee('Mark Carter', 5000, false);

let employees : Employee[] = [employeeOne, employeeTwo, employeeThree];  // Array of objects

// To add a new employee to the array of employees
employees.push(new Employee('Joseph Mille', 11000, true));

// To display ell  employee one by one
for (let i = 0; i < employees.length; i++) {
    console.log(`Employee${i + 1}: `);
    console.log(employees[i].employeeName);
    console.log(employees[i].salary);
    console.log(employees[i].isActive);
    console.log(employees[i].getNetSalary()); 
}


