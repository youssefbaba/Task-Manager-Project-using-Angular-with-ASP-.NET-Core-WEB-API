// Arrow Function

// for object method and constructor function it is best to use regular function
let car = {
    carNumber: "1234ABCD",
    carModule: "Ford",
    carColor: "Black",
    getDetails: function () {
        console.log("getDetails: ", this);  // in this case 'this keyword' represents the current object

        setTimeout(function () {
            console.log("regular function: ",this);   // in this case 'this keyword' represents the another object which is Timeout object
        }, 3000);

        setTimeout(() => {
            console.log("arrow function: ",this);   // in this case 'this keyword' represents the current object
        }, 5000);
    }
};

car.getDetails();

