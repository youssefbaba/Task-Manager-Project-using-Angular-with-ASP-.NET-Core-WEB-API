import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { Task } from 'src/app/models/task';
import { TaskPriority } from 'src/app/models/task-priority';
import { TaskStatus } from 'src/app/models/task-status';
import { EmployeesService } from 'src/app/services/employees.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { TaskPrioritiesService } from 'src/app/services/task-priorities.service';
import { TaskStatusesService } from 'src/app/services/task-statuses.service';
import { TasksService } from 'src/app/services/tasks.service';

export interface CustomFormGroup extends FormGroup {
  submitted: boolean;
}

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})

export class EditTaskComponent implements OnInit {

  // Properties
  editTaskForm!: CustomFormGroup;
  projects!: Observable<Project[]>;
  employees!: Observable<any>;
  taskPriorities!: Observable<TaskPriority[]>;
  taskStatuses! : Observable<TaskStatus[]>
  taskID!: number;
  currentTask: Task = new Task();
  routeParamsSubscription!: Subscription;

  // Constructor
  constructor(private projectsService: ProjectsService, private activatedRoute: ActivatedRoute,
    private employeesService: EmployeesService, private taskPrioritiesService: TaskPrioritiesService,
    private router: Router, private tasksService: TasksService, private formBuilder: FormBuilder,
    private taskStatusesService: TaskStatusesService) { }

  // Methods
  ngOnInit(): void {

    this.editTaskForm = this.formBuilder.group({
      taskID:null,
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
      currentTaskStatusID: [null, {
        validators: [Validators.required]
      }]
    }) as CustomFormGroup;

    this.projects = this.projectsService.getAllProjects();
    this.employees = this.employeesService.getAllEmployees();
    this.taskPriorities = this.taskPrioritiesService.getTaskPriorities();
    this.taskStatuses = this.taskStatusesService.getAllTaskStatuses();

    this.editTaskForm.submitted = false;

    this.routeParamsSubscription = this.activatedRoute.params.subscribe({
      next: (params) => {
        this.taskID = params["taskid"];
        this.tasksService.getTaskByTaskID(this.taskID).subscribe({
          next: (response: Task) => {
            if (response != null) {

              this.currentTask = response;

              this.editTaskForm.patchValue({
                taskID : this.currentTask.taskID,
                taskTitle: this.currentTask.taskTitle,
                description: this.currentTask.description,
                projectID: this.currentTask.projectID,
                assignedTo: this.currentTask.assignedTo,
                taskPriorityID: this.currentTask.taskPriorityID,
                currentTaskStatusID: this.currentTask.currentTaskStatusID
              });
            }
          }
        });
      }
    });
  }

  onSubmitTaskEdit() {
    this.editTaskForm.submitted = true;
    if (this.editTaskForm.valid) {
      this.tasksService.updateTask(this.taskID ,this.editTaskForm.value).subscribe({
        next: (response: Task) => {

          this.router.navigate(['/employee', 'tasks']);

          this.editTaskForm.reset({
            taskTitle: null,
            description: null,
            projectID: null,
            assignedTo: null,
            taskPriorityID: null,
            currentTaskStatusID: null
          });

        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

}
