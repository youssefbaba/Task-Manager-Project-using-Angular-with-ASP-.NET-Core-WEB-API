export class PersonFullName {
    firstName: string | any;
    lastName: string | any;

    constructor(){
        this.firstName = null;
        this.lastName = null;
    }
};

export class SignUpViewModel {

    personName : PersonFullName;
    email: string | any;
    mobile: string | any;
    dateOfBirth: string | any;
    password: string | any;
    confirPassword: string | any;
    gender: string | any;
    countryID: number | any;
    receiveNewsLetters: boolean | any;
    skills: any[];

    constructor() {

        this.personName = new PersonFullName();
        this.email = null;
        this.mobile = null;
        this.dateOfBirth = null;
        this.password = null;
        this.confirPassword = null;
        this.gender = null;
        this.countryID = null;
        this.receiveNewsLetters = false;
        this.skills = [];
    }
}
