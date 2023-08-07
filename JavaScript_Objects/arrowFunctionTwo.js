// Arrow Function

console.log("Outside the object: ", this); // {}

let person = {
    fullName: "Adam William",
    getFullName: function () {
        console.log(this);
    }
};

console.log("Calling method directly: ");
person.getFullName(); // in this case 'this keyword' represents the current object

console.log("Calling method undirectly using setTimeout: ");
setTimeout(person.getFullName, 3000); // in this case 'this keyword' represents another object which is Timeout object

console.log("Calling method undirectly using setTimeout and bind method: ");
setTimeout(person.getFullName.bind(person), 3000); // in this case 'this keyword' represents the current object
