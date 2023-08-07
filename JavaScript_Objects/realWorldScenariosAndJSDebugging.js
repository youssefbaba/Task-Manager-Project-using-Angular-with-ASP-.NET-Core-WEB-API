// Real World Scenarios And JS Debugging

let employee = {

    // Properties:
    firstName: "Smith",
    lastName: "John",
    designation: "Clerk",
    salary: 3000,
    workExperinceYears: 4,

    // Methods: 
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    promote: function () {
        let isEligibleForPromotion = false;
        if (this.designation == "Clerk") {
            if (this.workExperinceYears >= 3) {
                isEligibleForPromotion = true;
                this.designation = "Asst.Manager";
                this.salary += (this.salary * 0.1);
            } else {
                isEligibleForPromotion = false;
            }
        } else if (this.designation == "Asst.Manager") {
            if (this.workExperinceYears >= 5) {
                isEligibleForPromotion = true;
                this.designation = "Manager";
                this.salary += (this.salary * 0.2);
            } else {
                isEligibleForPromotion = false;
            }
        }
        return isEligibleForPromotion;
    }
}

console.log(employee);
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.designation);
console.log(employee.salary);
console.log(employee.workExperinceYears);

console.log(employee.getFullName());
if (employee.promote()) {
    console.log("Congratulation! The Employee Promoted.");
    console.log(`Updated Salary: ${employee.salary}`);
    console.log(`Updated Designation: ${employee.designation}`);
} else {
    console.log("Employee is not eligible.");
}
