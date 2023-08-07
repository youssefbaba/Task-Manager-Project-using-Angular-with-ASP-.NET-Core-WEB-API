import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/models/country';
import { CountriesService } from 'src/app/services/countries.service';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

// Define a custom interface to extend FormGroup
interface CustomFormGroup extends FormGroup {
    submitted: boolean;
}

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

    // Properties
    countries: Country[] = [];
    showLoading: boolean = true;

    searchBy: string = "countryName";
    searchText: string = "";

    currentPageIndex: number = 0;
    pages: any[] = [];
    pageSize: number = 5;

    newForm!: CustomFormGroup;
    editForm!: CustomFormGroup;
    deleteForm!: CustomFormGroup;

    @ViewChild("defaultTextBoxNew") defaultTextBoxNew!: ElementRef;
    @ViewChild("defaultTextBoxEdit") defaultTextBoxEdit!: ElementRef;

    sortBy: string = "countryName";
    sortOrder: string = "ASC";

    // Constructor
    constructor(private countriesService: CountriesService, private formBuilder: FormBuilder) { }

    // Methods
    ngOnInit(): void {
        // Get Data from database
        this.countriesService.getAllCountries().subscribe({
            next: (response: Country[]) => {
                this.countries = response;
                this.showLoading = false;
                this.calculateNumberOfPages();
            },
            error: (error) => {
                console.log(error);
            }
        });

        // Create ReactiveFom for newForm
        this.newForm = this.formBuilder.group({
            countryName: [null, {
                validators: [Validators.required]
            }]
        }) as CustomFormGroup;

        // Create ReactiveFom for editForm
        this.editForm = this.formBuilder.group({
            countryID: null,
            countryName: [null, {
                validators: [Validators.required]
            }]
        }) as CustomFormGroup;

        // Create ReactiveFom for deleteForm
        this.deleteForm = this.formBuilder.group({
            countryID: null,
            countryName: null
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
            this.countriesService.insertCountry(this.newForm.value).subscribe({
                next: (response: Country) => {

                    // Add Country to Grid
                    let country: Country = new Country();
                    country.countryID = response.countryID;
                    country.countryName = response.countryName;

                    this.countries.push(country);

                    // Handle "Cancel" button click event
                    $('#newCountryFormCancel').trigger('click');

                    this.calculateNumberOfPages();

                },
                error: (error) => {
                    console.log(error);
                }
            });

    }

    onModalInsertHidden() {
        this.newForm.reset({
            countryName: null
        });
    }

    onEditClick(countryID: number): void {
        this.editForm.submitted = false;
        let existingCountry = this.countries.find((item) => item.countryID === countryID);
        if (existingCountry !== undefined) {
            this.editForm.reset({
                countryID: existingCountry.countryID,
                countryName: existingCountry.countryName,
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
            this.countriesService.updateCountry(this.editForm.value, this.editForm.value.countryID).subscribe({
                next: (response: Country) => {

                    // Update Country to Grid
                    let country: Country = new Country();
                    country.countryID = response.countryID;
                    country.countryName = response.countryName;

                    //to replace the object based on the condition
                    this.countries = this.countries.map((item) => (item.countryID === country.countryID ? country : item));

                    // Handle "Cancel" button click event
                    $('#editCountryFormCancel').trigger('click');
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    }

    onModalEditHidden() {
        this.editForm.reset({
            countryID: null,
            countryName: null
        });
    }

    onDeleteClick(countryID: number): void {
        let existingCountry = this.countries.find((item) => item.countryID === countryID);
        if (existingCountry !== undefined) {
            this.deleteForm.reset({
                countryID: existingCountry.countryID,
                countryName: existingCountry.countryName
            })
        }
    }

    onDeleteConfirmClick(): void {

        this.countriesService.deleteCountry(this.deleteForm.value.countryID).subscribe({
            next: () => {
                // Delete Country from Grid
                // Use filter() to remove the project based on the condition
                this.countries = this.countries.filter((item) => item.countryID !== this.deleteForm.value.countryID);

                // Handle "Cancel" button click event
                $('#deleteCountryFormCancel').trigger('click');

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
            countryID: null,
            countryName: null,
        });
    }

    calculateNumberOfPages() {
        let filterPipe = new FilterPipe();
        let resultCountries = filterPipe.transform(this.countries, this.searchBy, this.searchText);
        let numberOfPages = Math.ceil(resultCountries.length / this.pageSize);
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
