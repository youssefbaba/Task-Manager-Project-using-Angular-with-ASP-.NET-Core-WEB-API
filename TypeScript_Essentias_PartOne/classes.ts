// Classes

class Student {
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
    constructor(public firstName: string, public lastName: string, public mark: number, private courses: string[]) {
    }


    // Methods : all methods by default are public
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    };

    enroll(courseName: string): void {
        this.courses.push(courseName);
    };

    getCoursesList(): string[] {
        return this.courses;
    }
}

// Creat an object
let student: Student = new Student('Thomas', 'Carter', 65, ['Angular', 'Bootstrap', ".Net Core"]);
console.log(student.firstName);
console.log(student.lastName);
console.log(student.mark);
//console.log(student.courses.length);
console.log(student.getCoursesList().length);
console.log(student.getFullName());
console.log(student.enroll('TypeScript'));
//console.log(student.courses.length);
console.log(student.getCoursesList().length);