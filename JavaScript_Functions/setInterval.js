// setInterval

function sayHello(params) {
    console.log("Hello");
}

let intervalID = setInterval(sayHello, 2 * 1000); // calls the sayHello function after every 2 seconds repeatedly.

function stopInterval() {
    clearInterval(intervalID); // stop setInterval
}

setTimeout(stopInterval, 11 * 2 * 1000); // calls stopInterval function after 20 seconds