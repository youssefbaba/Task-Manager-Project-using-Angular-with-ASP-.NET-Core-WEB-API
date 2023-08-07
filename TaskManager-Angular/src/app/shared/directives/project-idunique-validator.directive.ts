import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { Observable, map } from 'rxjs';
import { Project } from '../../models/project';

@Directive({
  selector: '[projectIDUniqueValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: ProjectIDUniqueValidatorDirective,
      multi: true
    }
  ]
})


export class ProjectIDUniqueValidatorDirective implements AsyncValidator {

  constructor(private projectsService: ProjectsService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    return this.projectsService.getProjectByProjectID(control.value).pipe(map(
      (response: Project) => {
        if (response != null) {
          return { uniqueProjectID: { valid: false } };
        } else {
          return null;
        }
      }
    ));
  }

}
