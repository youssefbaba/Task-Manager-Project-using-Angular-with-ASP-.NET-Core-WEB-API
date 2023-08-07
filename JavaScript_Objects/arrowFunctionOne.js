// Arrow Function

let functionOne = function () { // Regular function
    console.log("Inside the regular function: ", this); // in this case 'this keyword' represents the global object which contains some members.
}

console.log("Outside the function: ", this); // in this case 'this keyword' represents the global empty object
functionOne();

let functionTwo = () => { // Arrow function
    console.log("Inside the arrow function: ", this); // in this case 'this keyword' represents the global empty object
}

console.log("Outside the function: ", this);
functionTwo();

let student = {
    studentName: "John Doe",
    getStudentName: function () {  // using regular function for method it is recommended
        console.log("Inside the regular function of method: ", this); // in this case 'this keyword' represents the current object (so it is changed)
    }
}

console.log("Outside the function: ", this); // {}
student.getStudentName();

let person = {
    fullName: "Adam William",
    getFullName: () => { // using arrow function for method it is not good idea
        console.log("Inside the arrow function of method: ", this);
    }
}

console.log("Outside the function: ", this); // {}
person.getFullName();