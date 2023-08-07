// this keyword

// this = current object
// inside ths object we can use this.property or this.method() to access to members of the current object.
let person = {
    personName: "David Smith",
    age: 35,
    greeting: function() {
        console.log(this);
        return `Hi ${this.personName}`;
    },
    birthDay: function() {
        return `Happy Birthday ${this.personName}`;
    }
}

// outside the object we can use person.property or person.method() to access to members of person object.
console.log(person);
console.log(person.greeting());  // this keyword inside a method represents the current object which the method is present.
console.log(person.personName);
console.log(this);   // this keyword outside a method represents a default empty object.
