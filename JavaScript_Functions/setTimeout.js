// setTimeout

function sayHello() {
    console.log("Hello");
}

function sayGoodBye() {
    console.log("Good bye");
}

sayHello(); // Invokes sayHello immediately
setTimeout(sayGoodBye, 10 * 1000);  // Invokes sayGoodbye function after 10 seconds.