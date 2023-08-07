import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientLocation } from 'src/app/models/client-location';
import { ClientLocationsService } from 'src/app/services/client-locations.service';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

// Define a custom interface to extend FormGroup
interface CustomFormGroup extends FormGroup {
    submitted: boolean;
}

@Component({
    selector: 'app-client-locations',
    templateUrl: './client-locations.component.html',
    styleUrls: ['./client-locations.component.scss']
})
export class ClientLocationsComponent implements OnInit {

    // Properties
    clientLocations: ClientLocation[] = [];
    showLoading: boolean = true;

    newForm!: CustomFormGroup;
    editForm!: CustomFormGroup;
    deleteForm!: CustomFormGroup;

    @ViewChild("defaultTextBoxNew") defaultTextBoxNew!: ElementRef;
    @ViewChild("defaultTextBoxEdit") defaultTextBoxEdit!: ElementRef;

    searchBy: string = "clientLocationName";
    searchText: string = "";

    currentPageIndex: number = 0;
    pages: any[] = [];
    pageSize: number = 5;

    sortBy: string = "clientLocationName";
    sortOrder: string = "ASC";

    // Constructor
    constructor(private clientLocationsService: ClientLocationsService, private formBuilder: FormBuilder) { }

    // Methods
    ngOnInit(): void {
        // Get Data from database
        this.clientLocationsService.getClientLocations().subscribe({
            next: (response: ClientLocation[]) => {
                this.clientLocations = response;
                this.showLoading = false;
                this.calculateNumberOfPages();
            },
            error: (error) => {
                console.log(error);
            }
        });

        // Create ReactiveFom for newForm
        this.newForm = this.formBuilder.group({
            clientLocationName: [null, {
                validators: [Validators.required]
            }]
        }) as CustomFormGroup;

        // Create ReactiveFom for editForm
        this.editForm = this.formBuilder.group({
            clientLocationID: null,
            clientLocationName: [null, {
                validators: [Validators.required]
            }],
        }) as CustomFormGroup;

        // Create ReactiveFom for deleteForm
        this.deleteForm = this.formBuilder.group({
            clientLocationID: null,
            clientLocationName: null
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
            this.clientLocationsService.insertClientLocation(this.newForm.value).subscribe({
                next: (response: ClientLocation) => {

                    // Add Country to Grid
                    let clientLocation: ClientLocation = new ClientLocation();
                    clientLocation.clientLocationID = response.clientLocationID;
                    clientLocation.clientLocationName = response.clientLocationName;

                    this.clientLocations.push(clientLocation);

                    // Handle "Cancel" button click event
                    $('#newClientLocationFormCancel').trigger('click');

                    this.calculateNumberOfPages();

                },
                error: (error) => {
                    console.log(error);
                }
            });
    }

    onModalInsertHidden() {
        this.newForm.reset({
            clientLocationName: null
        });
    }

    onEditClick(clientLocationID: number): void {
        this.editForm.submitted = false;
        let existingClientLocation = this.clientLocations.find((item) => item.clientLocationID === clientLocationID);
        if (existingClientLocation !== undefined) {
            this.editForm.reset({
                clientLocationID: existingClientLocation.clientLocationID,
                clientLocationName: existingClientLocation.clientLocationName,
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
            this.clientLocationsService.updateClientLocation(this.editForm.value.clientLocationID, this.editForm.value,).subscribe({
                next: (response: ClientLocation) => {

                    // Update ClientLocation to Grid
                    let clientLocation: ClientLocation = new ClientLocation();
                    clientLocation.clientLocationID = response.clientLocationID;
                    clientLocation.clientLocationName = response.clientLocationName;

                    //to replace the object based on the condition
                    this.clientLocations = this.clientLocations.map((item) => (item.clientLocationID === clientLocation.clientLocationID ? clientLocation : item));

                    // Handle "Cancel" button click event
                    $('#editClientLocationFormCancel').trigger('click');
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    }

    onModalEditHidden() {
        this.editForm.reset({
            clientLocationID: null,
            clientLocationName: null
        });
    }

    onDeleteClick(clientLocationID: number): void {
        let existingClientLocation = this.clientLocations.find((item) => item.clientLocationID === clientLocationID);
        if (existingClientLocation !== undefined) {
            this.deleteForm.reset({
                clientLocationID: existingClientLocation.clientLocationID,
                clientLocationName: existingClientLocation.clientLocationName
            })
        }
    }

    onDeleteConfirmClick(): void {
        this.clientLocationsService.deleteClientLocation(this.deleteForm.value.clientLocationID).subscribe({
            next: () => {
                // Delete ClientLocation from Grid
                // Use filter() to remove the clientLocation based on the condition
                this.clientLocations = this.clientLocations.filter((item) => item.clientLocationID !== this.deleteForm.value.clientLocationID);

                // Handle "Cancel" button click event
                $('#deleteClientLocationFormCancel').trigger('click');

                this.calculateNumberOfPages();
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    onModalDeleteHidden() {
        // Clear Delete Country Dialog
        this.deleteForm.reset({
            clientLocationID: null,
            clientLocationName: null
        });
    }

    calculateNumberOfPages() {
        let filterPipe = new FilterPipe();
        let resultClientLocations = filterPipe.transform(this.clientLocations, this.searchBy, this.searchText);
        let numberOfPages = Math.ceil(resultClientLocations.length / this.pageSize);
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
