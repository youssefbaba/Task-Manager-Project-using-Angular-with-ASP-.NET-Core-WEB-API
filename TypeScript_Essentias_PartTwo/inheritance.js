"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// Inheritance
var Animal = /** @class */ (function () {
    // Constructor
    function Animal(name) {
        this.name = name;
    }
    // Methods
    Animal.prototype.makeSound = function () {
        console.log("Animal is making a sound.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // Constructor
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    // Methods
    Dog.prototype.makeSound = function () {
        console.log("Woof! Woof!");
    };
    Dog.prototype.wagTail = function () {
        console.log("Dog is wagging its tail.");
    };
    return Dog;
}(Animal));
// Creating instances of the classes
var animal = new Animal("Generic Animal");
var dog = new Dog("Buddy", "Labrador");
console.log(animal.name);
animal.makeSound();
console.log(dog.name);
console.log(dog.breed);
dog.makeSound();
dog.wagTail();
var Person = /** @class */ (function () {
    // Constructor
    function Person(personName, age) {
        this.personName = personName;
        this.age = age;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    // Constructor
    function Employee(personName, age, salary, isActive) {
        var _this = _super.call(this, personName, age) || this;
        _this.salary = salary;
        _this.isActive = isActive;
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
    return Employee;
}(Person));
// Objects
var employeeOne = new Employee('Daniel Taylor', 43, 15000, true);
var employeeTwo = new Employee('Paul Wilson', 35, 8000, true);
var employeeThree = new Employee('Mark Carter', 41, 5000, false);
var employees = [employeeOne, employeeTwo, employeeThree]; // Array of objects
// To add a new employee to the array of employees
employees.push(new Employee('Joseph Mille', 52, 11000, true));
// To display ell  employee one by one
for (var i = 0; i < employees.length; i++) {
    console.log("Employee".concat(i + 1, ": "));
    console.log(employees[i].personName);
    console.log(employees[i].age);
    console.log(employees[i].salary);
    console.log(employees[i].isActive);
    console.log(employees[i].getNetSalary());
}
