import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { Task } from 'src/app/models/task';
import { TaskPriority } from 'src/app/models/task-priority';
import { EmployeesService } from 'src/app/services/employees.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { TaskPrioritiesService } from 'src/app/services/task-priorities.service';
import { TasksService } from 'src/app/services/tasks.service';

export interface CustomFormGroup extends FormGroup {
  submitted: boolean;
}

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  // Properties
  newTaskForm!: CustomFormGroup;
  projects!: Observable<Project[]>;
  employees!: Observable<any>;
  taskPriorities!: Observable<TaskPriority[]>;

  // Constructor
  constructor(private projectsService: ProjectsService,
    private employeesService: EmployeesService, private taskPrioritiesService: TaskPrioritiesService,
    private router: Router, private tasksService: TasksService, private formBuilder: FormBuilder) { }

  // Methods
  ngOnInit(): void {

    this.newTaskForm = this.formBuilder.group({
      taskTitle: [null, {
        validators: [Validators.required]
      }],
      description: null,
      projectID: [null, {
        validators: [Validators.required]
      }],
      assignedTo: [null, {
        validators: [Validators.required]
      }],
      taskPriorityID: [null, {
        validators: [Validators.required]
      }],
      currentStatus: "Holding"
    }) as CustomFormGroup;

    this.projects = this.projectsService.getAllProjects();
    this.employees = this.employeesService.getAllEmployees();
    this.taskPriorities = this.taskPrioritiesService.getTaskPriorities();

    this.newTaskForm.submitted = false;
  }

  onSubmitTask() {
    this.newTaskForm.submitted = true;
    if (this.newTaskForm.valid) {
      this.tasksService.insertTask(this.newTaskForm.value).subscribe({
        next: (response: Task) => {
          
          this.router.navigate(['/employee', 'tasks']);

          this.newTaskForm.reset({
            taskTitle: null,
            description: null,
            projectID: null,
            assignedTo: null,
            taskPriorityID: null,
            currentStatus: "Holding"
          });

        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

}
