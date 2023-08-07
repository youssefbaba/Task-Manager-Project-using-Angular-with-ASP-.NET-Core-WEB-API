"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Constructors
var Employee = /** @class */ (function () {
    // Constructor
    function Employee(employeeName, salary, isActive) {
        this.employeeName = employeeName;
        this.salary = salary;
        this.isActive = isActive;
    }
    // Methods
    Employee.prototype.getNetSalary = function () {
        var netSalary;
        if (this.isActive) {
            if (this.salary < 10000) {
                netSalary = this.salary - (this.salary * (10 / 100));
            }
            else {
                netSalary = this.salary - (this.salary * (15 / 100));
            }
        }
        else {
            netSalary = 0;
        }
        return netSalary;
    };
    return Employee;
}());
// Objects
var employeeOne = new Employee('Daniel Taylor', 15000, true);
console.log(employeeOne);
console.log(employeeOne.getNetSalary());
var employeeTwo = new Employee('Paul Wilson', 8000, true);
console.log(employeeTwo);
console.log(employeeTwo.getNetSalary());
var employeeThree = new Employee('Mark Carter', 5000, false);
console.log(employeeThree);
console.log(employeeThree.getNetSalary());
