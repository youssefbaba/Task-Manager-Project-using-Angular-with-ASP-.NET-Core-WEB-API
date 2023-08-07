// Classes
var Employee = /** @class */ (function () {
    function Employee() {
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
var employeeOne = new Employee();
employeeOne.employeeName = 'Daniel Taylor';
employeeOne.salary = 15000;
employeeOne.isActive = true;
console.log(employeeOne);
console.log(employeeOne.getNetSalary());
var employeeTwo = new Employee();
employeeTwo.employeeName = 'Paul Wilson';
employeeTwo.salary = 8000;
employeeTwo.isActive = true;
console.log(employeeTwo);
console.log(employeeTwo.getNetSalary());
var Person = /** @class */ (function () {
    // Constructor
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    ;
    // Methods
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var personOne = new Person('John', 'Doe', 26);
console.log(personOne.firstName);
console.log(personOne.lastName);
console.log(personOne.age);
console.log(personOne.getFullName());
