import { Directive } from '@angular/core';
import { AbstractControl,  NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[clientLocationStatusValidator]', 
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ClientLocationStatusValidatorDirective,
      multi: true
    }
  ]
})

export class ClientLocationStatusValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    
    // console.log(`control.value.selectedClientLocationName : '${control.value.selectedClientLocationName}'`);
    // console.log(`control.value.status : '${control.value.status}'`);

    if (control.value.status == "Support" && control.value.selectedClientLocationName == "New York") {
      //console.log("Invalid");
      return { clientLocationStatus: { valid: false } }; //invalid
    }
    else {
      //console.log("Valid");
      return null; //valid
    }
  }

}

