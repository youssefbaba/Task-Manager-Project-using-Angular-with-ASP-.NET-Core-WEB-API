import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { SignUpService } from './sign-up.service';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor(private signUpService: SignUpService) { }

  public minimumAgeValidator(minimumAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == null) {
        return null; // retgurn null if Date of birth is null
      }
      let toDay = new Date();
      let dateOfBirth = new Date(control.value);
      let timeDiff = Math.abs(toDay.getTime() - dateOfBirth.getTime());
      let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
      if (age >= minimumAge) {
        return null;  // Date of birth is valid
      }
      return { minAge: { valid: false } };  // Date of birth is invalid
    }
  }

  public compareValidator(controlToValidate: string, controlToCompare: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      if (formGroup.get(controlToValidate)?.value == null) {  // return null if Confirm Password is null
        return null;
      }
      if (formGroup.get(controlToCompare)?.value == formGroup.get(controlToValidate)?.value) {  //  controlToValidate == controlToCompare
        return null;  // Valid
      } else {
        formGroup.get(controlToValidate)?.setErrors({ compareValidator: { valid: false } });
        return { compareValidator: { valid: false } };  // Invalid
      }
    }
  }

  public duplicateEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.signUpService.getUserByEmail(control.value).pipe(map(
        (user : any) => {
          if (user != null) {
            return { duplicateEmail: {valid : false}}; // Invalid
          }
          return null;  // Valid
        }
      ));
    };
  }


}
