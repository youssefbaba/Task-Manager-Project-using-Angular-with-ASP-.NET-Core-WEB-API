import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskStatus } from 'src/app/models/task-status';
import { TaskStatusesService } from 'src/app/services/task-statuses.service';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

interface CustomFormGroup extends FormGroup {
  submitted: boolean;
}

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss']
})
export class TaskStatusComponent implements OnInit {

  // Properties
  taskStatuses: TaskStatus[] = [];
  showLoading: boolean = true;

  newForm!: CustomFormGroup;
  editForm!: CustomFormGroup;
  deleteForm!: CustomFormGroup;

  @ViewChild("defaultTextBoxNew") defaultTextBoxNew!: ElementRef;
  @ViewChild("defaultTextBoxEdit") defaultTextBoxEdit!: ElementRef;

  searchBy: string = "taskStatusName";
  searchText: string = "";

  currentPageIndex: number = 0;
  pages: any[] = [];
  pageSize: number = 5;

  sortBy: string = "taskStatusName";
  sortOrder: string = "ASC";

  // Constructor
  constructor(private taskStatusesService: TaskStatusesService, private formBuilder: FormBuilder) { }

  // Methods
  ngOnInit(): void {
    // Get Data from database
    this.taskStatusesService.getAllTaskStatuses().subscribe({
      next: (response: TaskStatus[]) => {
        this.taskStatuses = response;
        this.showLoading = false;
        this.calculateNumberOfPages();
      },
      error: (error) => {
        console.log(error);
      }
    });

    // Create ReactiveFom for newForm
    this.newForm = this.formBuilder.group({
      taskStatusName: [null, {
        validators: [Validators.required]
      }]
    }) as CustomFormGroup;

    // Create ReactiveFom for editForm
    this.editForm = this.formBuilder.group({
      taskStatusID: null,
      taskStatusName: [null, {
        validators: [Validators.required]
      }],
    }) as CustomFormGroup;

    //Create ReactiveFom for deleteForm
    this.deleteForm = this.formBuilder.group({
      taskStatusID: null,
      taskStatusName: null
    }) as CustomFormGroup;

  }

  onNewClick() {
    this.newForm.submitted = false;
    this.newForm.reset();
  }

  onModalInsertShown() {  // this method will execute automatically after the Insert modal has been fully displayed to the user.
    this.defaultTextBoxNew.nativeElement.focus();
  }

  onSubmitSave(): void {
    this.newForm.submitted = true;
    if (this.newForm.valid)

      // all this code should execute only if the form is valid
      this.taskStatusesService.insertTaskStatus(this.newForm.value).subscribe({
        next: (response: TaskStatus) => {

          // Add TaskStatus to Grid
          let taskStatus: TaskStatus = new TaskStatus();
          taskStatus.taskStatusID = response.taskStatusID;
          taskStatus.taskStatusName = response.taskStatusName;

          this.taskStatuses.push(taskStatus);

          // Handle "Cancel" button click event
          $('#newTaskStatusFormCancel').trigger('click');

          this.calculateNumberOfPages();

        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  onModalInsertHidden() {
    this.newForm.reset({
      taskStatusName: null
    });
  }

  onEditClick(taskStatusID: number): void {
    this.editForm.submitted = false;
    let existingTaskStatus = this.taskStatuses.find((item) => item.taskStatusID === taskStatusID);
    if (existingTaskStatus !== undefined) {
      this.editForm.reset({
        taskStatusID: existingTaskStatus.taskStatusID,
        taskStatusName: existingTaskStatus.taskStatusName,
      });
    }
  }

  onModalEditShown() { // this method will execute automatically after the Edit modal has been fully displayed to the user.
    this.defaultTextBoxEdit.nativeElement.focus();
  }

  onSubmitUpdate(): void {
    this.editForm.submitted = true;
    if (this.editForm.valid) {
      // All these tasks will be execute only if the editForm is valid
      this.taskStatusesService.updateTaskStatus(this.editForm.value.taskStatusID, this.editForm.value,).subscribe({
        next: (response: TaskStatus) => {

          // Update TaskPriority to Grid
          let taskStatus: TaskStatus = new TaskStatus();
          taskStatus.taskStatusID = response.taskStatusID;
          taskStatus.taskStatusName = response.taskStatusName;

          //to replace the object based on the condition
          this.taskStatuses = this.taskStatuses.map((item) => (item.taskStatusID === taskStatus.taskStatusID ? taskStatus : item));

          // Handle "Cancel" button click event
          $('#editTaskStatusFormCancel').trigger('click');
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  onModalEditHidden() {
    this.editForm.reset({
      taskStatusID: null,
      taskStatusName: null
    });
  }

  onDeleteClick(taskStatusID: number): void {
    let existingTaskStatus = this.taskStatuses.find((item) => item.taskStatusID === taskStatusID);
    if (existingTaskStatus !== undefined) {
      this.deleteForm.reset({
        taskStatusID: existingTaskStatus.taskStatusID,
        taskStatusName: existingTaskStatus.taskStatusName
      })
    }
  }

  onDeleteConfirmClick(): void {
    this.taskStatusesService.deleteTaskStatus(this.deleteForm.value.taskStatusID).subscribe({
      next: () => {
        // Delete TaskStatus from Grid
        // Use filter() to remove the clientLocation based on the condition
        this.taskStatuses = this.taskStatuses.filter((item) => item.taskStatusID !== this.deleteForm.value.taskStatusID);

        // Handle "Cancel" button click event
        $('#deleteTaskStatusFormCancel').trigger('click');

        this.calculateNumberOfPages();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onModalDeleteHidden() {
    // Clear Delete TaskStatus Dialog
    this.deleteForm.reset({
      taskStatusID: null,
      taskStatusName: null
    });
  }

  calculateNumberOfPages() {
    let filterPipe = new FilterPipe();
    let resultTaskStatuses = filterPipe.transform(this.taskStatuses, this.searchBy, this.searchText);
    let numberOfPages = Math.ceil(resultTaskStatuses.length / this.pageSize);
    this.pages = new Array(numberOfPages);
    this.currentPageIndex = 0;
  }

  onPreviousPageClick(): void {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
    }
  }

  onNextPageClick(): void {
    if (this.currentPageIndex < this.pages.length - 1) {
      this.currentPageIndex++;
    }
  }

  onCurrentPageClick(pageIndex: number) {
    this.currentPageIndex = pageIndex;
  }

  onSearchTeaxtKeyup() {
    this.calculateNumberOfPages();
  }

  onChangeSortingOrder(propertyName: string) {
    this.sortBy = propertyName;
    if (this.sortOrder == "ASC") {
      this.sortOrder = "DESC";
    } else {
      this.sortOrder = "ASC";
    }
  }

}
