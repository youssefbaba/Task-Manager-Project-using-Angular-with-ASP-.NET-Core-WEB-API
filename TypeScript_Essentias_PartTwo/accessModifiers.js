// Access Modifiers
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// by default all properties and methods of class are public
var Person = /** @class */ (function () {
    // Constructor
    function Person(personName, age, designation) {
        this.personName = personName;
        this.age = age;
        this.designation = designation;
    }
    // Methods
    Person.prototype.getPersonName = function () {
        return this.personName;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    // Constructor
    function Employee(personName, age, designation, salary, isActive) {
        var _this = _super.call(this, personName, age, designation) || this;
        _this.salary = salary;
        _this.isActive = isActive;
        //console.log(super.personName); // Error: personName is private and only accessible within the Person class  
        console.log(_this.getPersonName());
        console.log(_this.designation);
        return _this;
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
    Employee.prototype.getDesignation = function () {
        return this.designation;
    };
    return Employee;
}(Person));
// Objects
var employeeOne = new Employee('Daniel Taylor', 43, "Developer", 15000, true);
var employeeTwo = new Employee('Paul Wilson', 35, "Clerk", 8000, true);
var employeeThree = new Employee('Mark Carter', 41, "Asst.Manger", 5000, false);
var employees = [employeeOne, employeeTwo, employeeThree]; // Array of objects
// To add a new employee to the array of employees
employees.push(new Employee('Joseph Mille', 52, "Designer", 11000, true));
// To display ell  employee one by one
for (var i = 0; i < employees.length; i++) {
    console.log("Employee".concat(i + 1, ": "));
    //console.log(employees[i].personName); // Error: personName is private and only accessible within the Person class
    console.log(employees[i].getPersonName());
    console.log(employees[i].age);
    //console.log(employees[i].designation); // Error: designation is protected and only accessible within class Person and its subclass
    console.log(employees[i].getDesignation());
    console.log(employees[i].salary);
    console.log(employees[i].isActive);
    console.log(employees[i].getNetSalary());
}
