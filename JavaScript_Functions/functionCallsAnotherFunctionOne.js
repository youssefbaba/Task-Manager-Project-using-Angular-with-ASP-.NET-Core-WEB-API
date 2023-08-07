// Function definition

function showCountry(){
    return "USA";
}

function showCity(){
    return "New York";
}

function showStreet(){
    return "47 W 13th";
}

function showAddress(){
    let Address = showStreet() + ", " + showCity() + ", " + showCountry();
    console.log(Address);
}

// Function call
showAddress();
showAddress();
showAddress();