// Accessing Properties

// In JS property name must be string value (if it is not string it will be converted into string automatically)

let customer = {
    customerName: "Scott",
    email: "Scott@example.com",
    1: "hello"
}

console.log(customer.customerName);  // get value of property customerName by using dot notation
console.log(customer.email);  // get value of property email by using dot notation
console.log(customer[1]);

console.log(customer["customerName"]); // get value of property customerName by using bracket notation
console.log(customer["email"]); // get value of property email by using bracket notation

customer.customerName = "Smith";  // set value of property customerName by using dot notation
customer.email = "Smith@gmail.com";  // set value of property email by using dot notation

console.log(customer);

customer["customerName"] = "David"; // set value of property customerName by using bracket notation
customer["email"] = "David@outlook.com"; // set value of property email by using bracket notation

console.log(customer);
