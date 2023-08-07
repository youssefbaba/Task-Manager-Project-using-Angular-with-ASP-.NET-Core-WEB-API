// Classes
var Student = /** @class */ (function () {
    /*
    // Properties : all properties by default are public
    firstName: string;
    lastName: string;
    mark: number;
    private courses: string[];

    // Constructor
    constructor(firstName: string, lastName: string, mark: number, courses: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mark = mark;
        this.courses = courses;
    }
    */
    // shorthand notation :
    function Student(firstName, lastName, mark, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mark = mark;
        this.courses = courses;
    }
    // Methods : all methods by default are public
    Student.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    ;
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    ;
    Student.prototype.getCoursesList = function () {
        return this.courses;
    };
    return Student;
}());
// Creat an object
var student = new Student('Thomas', 'Carter', 65, ['Angular', 'Bootstrap', ".Net Core"]);
console.log(student.firstName);
console.log(student.lastName);
console.log(student.mark);
//console.log(student.courses.length);
console.log(student.getCoursesList().length);
console.log(student.getFullName());
console.log(student.enroll('TypeScript'));
//console.log(student.courses.length);
console.log(student.getCoursesList().length);
