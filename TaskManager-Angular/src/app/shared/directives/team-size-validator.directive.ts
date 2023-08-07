import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({  // the decorator Directive indicates that TeamSizeValidatorDirective class is a directive class is not a regular class.
  selector: '[teamSizeValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TeamSizeValidatorDirective,
      multi : true
    }
  ]
})
export class TeamSizeValidatorDirective implements Validator {

  // Propeties
  @Input("teamSizeValidator") amount: number | any = null;

  // Constructor
  constructor() { }

  // Methods
  validate(control: AbstractControl): ValidationErrors | null {

    let currentValueControl = control.value;
    let isValid = ((currentValueControl % this.amount) == 0);

    if (isValid) {
      return null;  // Valid Input
    } else {
      return { divisible: { valid: false } }; //  Invalid Input
    }

  }

}
