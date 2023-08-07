// Interfaces
// Create an object of type Human
var person = {
    firstName: 'Max',
    lastName: 'Allen',
    age: 43,
    getFullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    },
    greet: function () {
        console.log("Hi ".concat(this.getFullName()));
    },
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.getFullName());
console.log(person.greet());
var Developer = /** @class */ (function () {
    function Developer() {
    }
    // Methods
    Developer.prototype.promote = function () {
        console.log("Congratulation!!");
    };
    return Developer;
}());
var developer = new Developer();
developer.fullName = 'David Moore';
developer.age = 50;
developer.salary = 5000;
console.log(developer);
