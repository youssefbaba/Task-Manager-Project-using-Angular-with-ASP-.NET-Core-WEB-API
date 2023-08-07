export{}

// Constructors

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
console.log(employeeOne);
console.log(employeeOne.getNetSalary());

let employeeTwo: Employee = new Employee('Paul Wilson', 8000, true);
console.log(employeeTwo);
console.log(employeeTwo.getNetSalary());

let employeeThree: Employee = new Employee('Mark Carter', 5000, false);
console.log(employeeThree);
console.log(employeeThree.getNetSalary());