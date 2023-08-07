import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { Task } from 'src/app/models/task';
import { TaskStatus } from 'src/app/models/task-status';
import { TaskStatusDetail } from 'src/app/models/task-status-detail';
import { TaskStatusesService } from 'src/app/services/task-statuses.service';
import { TasksService } from 'src/app/services/tasks.service';

export interface CustomFormGroup extends FormGroup {
  submitted: boolean;
}

@Component({
  selector: 'app-update-task-status',
  templateUrl: './update-task-status.component.html',
  styleUrls: ['./update-task-status.component.scss']
})
export class UpdateTaskStatusComponent implements OnInit {

  // Properties
  taskID!: number;
  currentTask: Task = new Task();
  currentTaskStatusDetail: TaskStatusDetail = new TaskStatusDetail();
  routeParamsSubscription!: Subscription;
  editTaskStatusForm!: CustomFormGroup;
  taskStatuses!: Observable<TaskStatus[]>;


  // Constructor
  // activatedRoute represents the current route
  constructor(private activatedRoute: ActivatedRoute,
    private tasksService: TasksService, private formBuilder: FormBuilder,
    private taskStatusesService: TaskStatusesService, private router : Router) {
  }

  // Methods
  ngOnInit(): void {

    this.taskStatuses = this.taskStatusesService.getAllTaskStatuses();

    this.editTaskStatusForm = this.formBuilder.group({
      taskID: null,
      description: null,
      taskStatusID: [null, {
        validators: [Validators.required]
      }],
    }) as CustomFormGroup;

    this.editTaskStatusForm.submitted = false;

    this.routeParamsSubscription = this.activatedRoute.params.subscribe({
      next: (params) => {
        this.taskID = params["taskid"];
        this.tasksService.getTaskByTaskID(this.taskID).subscribe({
          next: (response: Task) => {
            if (response != null) {

              this.currentTask = response;

              this.editTaskStatusForm.patchValue({
                taskID : this.taskID,
                description : null,
                taskStatusID : this.currentTask.currentTaskStatusID
              });
              
            }
          }
        });
      }
    });
  }

  onSubmitTaskUpdate() {
    this.editTaskStatusForm.submitted = true;
    if (this.editTaskStatusForm.valid) {
      this.tasksService.updateTaskStatus(this.taskID, this.editTaskStatusForm.value).subscribe({
        next: (response : TaskStatusDetail) => {

          this.router.navigate(['/employee', 'tasks']);
          
          this.editTaskStatusForm.reset({
            taskID: null,
            description: null,
            taskStatusID: null
          });
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
  }
}
