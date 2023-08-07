"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Array Of Objects
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
var employeeTwo = new Employee('Paul Wilson', 8000, true);
var employeeThree = new Employee('Mark Carter', 5000, false);
var employees = [employeeOne, employeeTwo, employeeThree]; // Array of objects
// To add a new employee to the array of employees
employees.push(new Employee('Joseph Mille', 11000, true));
// To display ell  employee one by one
for (var i = 0; i < employees.length; i++) {
    console.log("Employee".concat(i + 1, ": "));
    console.log(employees[i].employeeName);
    console.log(employees[i].salary);
    console.log(employees[i].isActive);
    console.log(employees[i].getNetSalary());
}
