import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../models/country';
import { CustomValidatorsService } from '../../services/custom-validators.service';
import { SignUpService } from '../../services/sign-up.service';
import { SignUpViewModel } from '../../models/sign-up-view-model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../guards/can-deactivate-guard.service';

// Define a custom interface to extend FormGroup
interface CustomFormGroup extends FormGroup {
    submitted: boolean;
}

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})


export class SignUpComponent implements OnInit, AfterViewInit, CanComponentDeactivate {

    // Properties
    signUpForm!: CustomFormGroup;  // I'm certain that the signUpForm property will be initialized before being used
    genderOptions: string[] = ['Male', 'Female'];
    countries: Country[] = [];
    signUpViewModel: SignUpViewModel = new SignUpViewModel();
    signUpError: any = null;

    @ViewChild("inputFirstNameSignUp") inputFirstName! : ElementRef;

    canLeave: boolean = true;  // by default the user can leave the current route

    // Constructor
    constructor(private formBuilder: FormBuilder,
        private customValidatorsService: CustomValidatorsService,
        private signUpService: SignUpService,
        private loginService: LoginService,
        private router: Router
    ) { }

    // Methods
    ngOnInit(): void {

        this.signUpService.getAllCountries().subscribe({
            next: (response: Country[]) => {
                this.countries = response;
            }
        });

        this.signUpForm = this.formBuilder.group({
            personName: this.formBuilder.group({
                firstName: [null, {
                    validators: [Validators.required, Validators.minLength(2)]
                }],
                lastName: [null, {
                    validators: [Validators.required, Validators.minLength(2)]
                }
                ]
            }),
            email: [null, {
                validators: [Validators.required, Validators.email],  // Sync Validators
                asyncValidators: [this.customValidatorsService.duplicateEmail()],  // Async Validators
                updateOn: 'blur' // async validator run only when the input field loses focus (on blur).
            }],
            password: [null, {
                validators: [Validators.required]
            }],
            confirmPassword: [null, {
                validators: [Validators.required]
            }],
            mobile: [null, {
                validators: [Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]
            }],
            dateOfBirth: [null, {
                validators: [Validators.required, this.customValidatorsService.minimumAgeValidator(18)]
            }],
            gender: [null, {
                validators: [Validators.required]
            }],
            countryID: [null, {
                validators: [Validators.required]
            }],
            receiveNewsLetters: null,
            skills: this.formBuilder.array([])
        },
            {
                validators: this.customValidatorsService.compareValidator("confirmPassword", "password")
            }) as CustomFormGroup;

        // Add the custom property to the FormGroup
        this.signUpForm.submitted = false;

        this.signUpForm.valueChanges.subscribe({
            next: (value: any) => {    // value here represents this.this.signUpForm.value
                // Do something here ....
                //console.log(value);
                this.canLeave = false;  // the user can't leave the current route
            }
        });
    }

    ngAfterViewInit(): void {
        
        this.inputFirstName.nativeElement.focus();
    }

    onSubmitSignUp() {

        this.signUpForm.submitted = true

        if (this.signUpForm.valid) {

            this.signUpViewModel = this.signUpForm.value;

            this.signUpService.signUp(this.signUpViewModel).subscribe({
                next: (response: any) => {
                    if (this.loginService.getCurrentUser().role == "Admin") {
                        this.router.navigate(['/admin', 'dashboard']);
                    } else {
                        this.router.navigate(['/employee', 'tasks']);
                    }
                    this.signUpForm.submitted = false;
                    this.canLeave = true;
                },
                error: (error) => {
                    console.log(error);
                    this.signUpError = "Invalid Data";
                }
            });
        }

        // Get value of form element
        // console.log(this.signUpForm.value.personName.firstName);
        // console.log(this.signUpForm.value.personName.lastName);
        // console.log(this.signUpForm.value.email);
        // console.log(this.signUpForm.value.gender);

        // Display current form value
        //console.log(this.signUpForm);
        //console.log(this.signUpForm.value);

        // Set value (you must set value of all form elements)
        // this.signUpForm.setValue({
        //   firstName: "John",
        //   lastName: "Smith",
        //   email: "John123@gmail.com",
        //   password: "John@1234",
        //   confirmPassword: "John@1234",
        //   mobile: "+1 (433) 461-5572",
        //   dateOfBirth: new Date(2000, 6, 24),
        //   gender: "male",
        //   countryID: 1,
        //   receiveNewsLetters :true
        // })
        //console.log(this.signUpForm.value);

        // PatchValue (set the specific value that you want to update)
        // this.signUpForm.patchValue({
        //   firstName: "John",
        //   lastName: "Smith",
        //   email: "John123@gmail.com",
        //   password: "John@1234",
        //   confirmPassword: "John@1234"
        // })
        // console.log(this.signUpForm.value);

        // Reset the form (clear all form elements and set them to null)
        // this.signUpForm.reset();
        // console.log(this.signUpForm.value);

        // Reset with parameters (clear all form elements set to null + updates the values by using those given values)
        // this.signUpForm.reset({
        //   firstName: "David",
        //   lastName: "Drown",
        //   email: "David123@gmail.com"
        // });
        // console.log(this.signUpForm.value);

    }

    get skills(): FormArray {  // Getter 

        return this.signUpForm.get("skills") as FormArray;
    }

    initialSkills(): FormGroup {

        return this.formBuilder.group({
            skillName: [null, {
                validators: [Validators.required]
            }],
            expertiseLevel: [null, {
                validators: [Validators.required]
            }]
        });
    }

    onAddSkill() {

        this.skills.push(this.initialSkills());
    }

    onRemoveSkill(index: number) {

        this.skills.removeAt(index);
    }


}
