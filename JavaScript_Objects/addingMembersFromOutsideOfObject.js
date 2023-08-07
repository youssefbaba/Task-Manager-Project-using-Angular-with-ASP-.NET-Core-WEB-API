// Adding properties and methods from outside of object

let student = {}; // Empty object
console.log(student);
student.marks = 70; // adding new property to student object
student.getResult = function getResult() { // adding new method to student object
    if (this.marks >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
};
console.log(student);
console.log(student.marks); // call property => 70
console.log(student.getResult()); // call method => Pass

student.marks = 45; // overriding the property marks of student object

console.log(student);
console.log(student.marks); // call property => 45
console.log(student.getResult()); // cal property => Fail

