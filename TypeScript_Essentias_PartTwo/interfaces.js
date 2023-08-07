// Interfaces
// To create a class that implements the IEmployee interface
var Employee = /** @class */ (function () {
    function Employee() {
    }
    // Methods
    Employee.prototype.getTax = function () {
        return this.salary * (10 / 100);
    };
    return Employee;
}());
// To create an object
// first way by using class:
var employeeOne = new Employee();
employeeOne.salary = 5000;
console.log(employeeOne.salary);
console.log(employeeOne.getTax());
// second way by using interface:
var employeeTwo = {
    salary: 2500,
    getTax: function () {
        return this.salary * (15 / 100);
    }
};
console.log(employeeTwo.salary);
console.log(employeeTwo.getTax());
