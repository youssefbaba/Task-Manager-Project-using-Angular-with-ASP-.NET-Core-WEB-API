// Object Literals

{};  // Empty object

let person = {
    personName: "John Smith",   // Property
    age: 40,                    // Property
    greeting: function () {     // Method
        // console.log(`Hi ${this.personName}`);
        return `Hi ${this.personName}`;
    },           
    birthDay: function() {      // Method
        // console.log("Happy birthday.");
        return "Happy birthday.";
    }
}
console.log(person); // read or write the value of property
console.log(person.personName);  
console.log(person.age);
console.log(person.greeting());  // call the method
console.log(person.birthDay());