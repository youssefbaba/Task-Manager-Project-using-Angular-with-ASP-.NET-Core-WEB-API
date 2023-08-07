import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskPriority } from 'src/app/models/task-priority';
import { TaskPrioritiesService } from 'src/app/services/task-priorities.service';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

interface CustomFormGroup extends FormGroup {
    submitted: boolean;
}

@Component({
    selector: 'app-task-priorities',
    templateUrl: './task-priorities.component.html',
    styleUrls: ['./task-priorities.component.scss']
})
export class TaskPrioritiesComponent implements OnInit {

    // Properties
    taskPriorities: TaskPriority[] = [];
    showLoading: boolean = true;

    newForm!: CustomFormGroup;
    editForm!: CustomFormGroup;
    deleteForm!: CustomFormGroup;

    @ViewChild("defaultTextBoxNew") defaultTextBoxNew!: ElementRef;
    @ViewChild("defaultTextBoxEdit") defaultTextBoxEdit!: ElementRef;

    searchBy: string = "taskPriorityName";
    searchText: string = "";

    currentPageIndex: number = 0;
    pages: any[] = [];
    pageSize: number = 5;

    sortBy: string = "taskPriorityName";
    sortOrder: string = "ASC";

    // Constructor
    constructor(private taskPrioritiesService: TaskPrioritiesService, private formBuilder: FormBuilder) { }

    // Methods
    ngOnInit(): void {
        // Get Data from database
        this.taskPrioritiesService.getTaskPriorities().subscribe({
            next: (response: TaskPriority[]) => {
                this.taskPriorities = response;
                this.showLoading = false;
                this.calculateNumberOfPages();
            },
            error: (error) => {
                console.log(error);
            }
        });

        // Create ReactiveFom for newForm
        this.newForm = this.formBuilder.group({
            taskPriorityName: [null, {
                validators: [Validators.required]
            }]
        }) as CustomFormGroup;

        // Create ReactiveFom for editForm
        this.editForm = this.formBuilder.group({
            taskPriorityID: null,
            taskPriorityName: [null, {
                validators: [Validators.required]
            }],
        }) as CustomFormGroup;

        //Create ReactiveFom for deleteForm
        this.deleteForm = this.formBuilder.group({
            taskPriorityID: null,
            taskPriorityName: null
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
            this.taskPrioritiesService.insertTaskPriority(this.newForm.value).subscribe({
                next: (response: TaskPriority) => {

                    // Add  to Grid
                    let taskPriority: TaskPriority = new TaskPriority();
                    taskPriority.taskPriorityID = response.taskPriorityID;
                    taskPriority.taskPriorityName = response.taskPriorityName;

                    this.taskPriorities.push(taskPriority);

                    // Handle "Cancel" button click event
                    $('#newTaskPriorityFormCancel').trigger('click');

                    this.calculateNumberOfPages();

                },
                error: (error) => {
                    console.log(error);
                }
            });
    }

    onModalInsertHidden() {
        this.newForm.reset({
            taskPriorityName: null
        });
    }

    onEditClick(taskPriorityID: number): void {
        this.editForm.submitted = false;
        let existingTaskPriority = this.taskPriorities.find((item) => item.taskPriorityID === taskPriorityID);
        if (existingTaskPriority !== undefined) {
            this.editForm.reset({
                taskPriorityID: existingTaskPriority.taskPriorityID,
                taskPriorityName: existingTaskPriority.taskPriorityName,
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
            this.taskPrioritiesService.updateTaskPriority(this.editForm.value.taskPriorityID, this.editForm.value,).subscribe({
                next: (response: TaskPriority) => {

                    // Update TaskPriority to Grid
                    let taskPriority: TaskPriority = new TaskPriority();
                    taskPriority.taskPriorityID = response.taskPriorityID;
                    taskPriority.taskPriorityName = response.taskPriorityName;

                    //to replace the object based on the condition
                    this.taskPriorities = this.taskPriorities.map((item) => (item.taskPriorityID === taskPriority.taskPriorityID ? taskPriority : item));

                    // Handle "Cancel" button click event
                    $('#editTaskPriorityFormCancel').trigger('click');
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    }

    onModalEditHidden() {
        this.editForm.reset({
            taskPriorityID: null,
            taskPriorityName: null
        });
    }

    onDeleteClick(taskPriorityID: number): void {
        let existingTaskPriority = this.taskPriorities.find((item) => item.taskPriorityID === taskPriorityID);
        if (existingTaskPriority !== undefined) {
            this.deleteForm.reset({
                taskPriorityID: existingTaskPriority.taskPriorityID,
                taskPriorityName: existingTaskPriority.taskPriorityName
            })
        }
    }

    onDeleteConfirmClick(): void {
        this.taskPrioritiesService.deleteTaskPriority(this.deleteForm.value.taskPriorityID).subscribe({
            next: () => {
                // Delete TaskPriority from Grid
                // Use filter() to remove the clientLocation based on the condition
                this.taskPriorities = this.taskPriorities.filter((item) => item.taskPriorityID !== this.deleteForm.value.taskPriorityID);

                // Handle "Cancel" button click event
                $('#deleteTaskPriorityFormCancel').trigger('click');

                this.calculateNumberOfPages();
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    onModalDeleteHidden() {
        // Clear Delete TaskPriority Dialog
        this.deleteForm.reset({
            taskPriorityID: null,
            taskPriorityName: null
        });
    }

    calculateNumberOfPages() {
        let filterPipe = new FilterPipe();
        let resultTaskPriorities = filterPipe.transform(this.taskPriorities, this.searchBy, this.searchText);
        let numberOfPages = Math.ceil(resultTaskPriorities.length / this.pageSize);
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
