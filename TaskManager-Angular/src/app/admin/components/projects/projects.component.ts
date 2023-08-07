import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientLocation } from '../../../models/client-location';
import { ClientLocationsService } from '../../../services/client-locations.service';
import { Project } from '../../../models/project';
import { ProjectsService } from '../../../services/projects.service';
import * as $ from 'jquery';
import { ProjectComponent } from '../project/project.component';
import { FilterPipe } from '../../../shared/pipes/filter.pipe';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    // Properties
    projects: Project[] = [];
    newProject: Project = new Project();
    editProject: Project = new Project();
    deleteProject: Project = new Project();
    searchByOptions: any[] = [
        { value: 'projectID', text: 'Project ID' },
        { value: 'projectName', text: 'Project Name' },
        { value: 'dateOfStart', text: 'Date Of Start' },
        { value: 'teamSize', text: 'Team Size' },
        { value: 'active', text: 'Activated' },
        { value: 'status', text: 'Status' },
        { value: 'clientLocationID', text: 'Client Location' },
        /*  
       // Only for json-server
        {value:'id', text:'Project ID'},  
        {value:'projectName', text:'Project Name'},
        {value:'dateOfStart', text:'Date Of Start'},
        {value:'teamSize', text:'Team Size'}
        */
    ];
    fetchData: boolean = false;
    searchBy: string = 'projectID';
    //searchBy: string = 'id'; // Only for json-server
    searchText: string = "";

    // clientLocations!: Observable<ClientLocation[]>;
    clientLocations: ClientLocation[] = [];
    selectedClientLocationName: any = null;

    // In order to access to the newForm based on reference variable:
    @ViewChild("newForm") newForm: NgForm | any = null;
    @ViewChild("editForm") editForm: NgForm | any = null;

    //@ViewChild("projectChild") projChild: ProjectComponent | any = null;   // because we are using NgFor so the projChild property represents the first project
    @ViewChildren("projectChild") projectsChild!: QueryList<ProjectComponent>;   // projectsChild property represents all projects

    isAllChecked: boolean = false;

    modalStartTime!: number;

    @ViewChild("createProjectID") inputCreateProjectID!: ElementRef;
    @ViewChild("updateProjectName") inputUpdateProjectName!: ElementRef;

    currentPageIndex!: number;
    pages : any[] = [] ;
    pageSize: number = 3;

    constructor(private projectService: ProjectsService,
        private clientLocationsService: ClientLocationsService) {
    }

    ngOnInit(): void {

        //debugger;   // adding debugger here as breakpoint.
        this.projectService.getAllProjects().subscribe({
            next: (response: Project[]) => {
                this.projects = response;
                this.fetchData = true;
                //debugger;   // adding another debugger here as another breakpoint.

                this.calculateNumberOfPages();
            }
        });

        this.clientLocationsService.getClientLocations().subscribe({
            next: (response: ClientLocation[]) => {
                this.clientLocations = response;
            }
        });

    }

    onSelectChange(event: any) {

        let clientLocationID = parseInt(event.target.value, 10);
        if (!isNaN(clientLocationID)) {
            let existingClientLocation = this.clientLocations.find((item) => item.clientLocationID === clientLocationID);
            if (existingClientLocation !== undefined) {
                this.selectedClientLocationName = existingClientLocation.clientLocationName;
            }
        }
    }


    onSubmitSave(): void {

        if (this.newForm.valid) {
            //console.log(this.newProject);
            // all this code should execute only if the form is valid
            this.projectService.insertProject(this.newProject).subscribe({
                next: (response: Project) => {

                    // Add Project to Grid
                    let project: Project = new Project();
                    project.projectID = response.projectID;
                    //project.id = response.id;  // Only for json-server
                    project.projectName = response.projectName;
                    project.dateOfStart = response.dateOfStart;
                    project.teamSize = response.teamSize;
                    project.active = response.active;
                    project.status = response.status;
                    project.clientLocationID = response.clientLocationID;
                    project.clientLocation = response.clientLocation;

                    this.projects.push(project);

                    // Clear New Project Dialog
                    this.newProject = new Project();

                    // Handle "Cancel" button click event
                    $('#newCancelButton').trigger('click');

                    this.calculateNumberOfPages();

                },
                error: (error) => {
                    console.log(error);
                },
                complete: () => {
                    console.log('Completed successfully!');
                }
            });

        }
    }

    onEditClick(projectID: number): void {

        let existingProject = this.projects.find((item) => item.projectID === projectID);
        if (existingProject !== undefined) {
            let obj = {
                'projectID': existingProject.projectID,
                'projectName': existingProject.projectName,
                'dateOfStart': existingProject.dateOfStart,
                'teamSize': existingProject.teamSize,
                'active': existingProject.active,
                'status': existingProject.status,
                'clientLocationID': existingProject.clientLocationID,
                'selectedClientLocationName': existingProject.clientLocation.clientLocationName
            };
            this.editForm.setValue(obj);
            this.editForm.resetForm(this.editForm.value);

            this.editProject.projectID = existingProject.projectID;
            //his.editProject.id = this.projects[index].id;  // Only for json-server
            this.editProject.projectName = existingProject.projectName;
            this.editProject.dateOfStart = existingProject.dateOfStart;
            this.editProject.teamSize = existingProject.teamSize;
            this.editProject.active = existingProject.active;
            this.editProject.status = existingProject.status;
            this.editProject.clientLocationID = existingProject.clientLocationID;
            this.editProject.clientLocation = null;
        }
    }

    onSubmitUpdate(): void {

        if (this.editForm.valid) {
            // All these tasks will be execute only if the editForm is valid
            this.projectService.updateProject(this.editProject.projectID, this.editProject).subscribe({
                //this.projectService.updateProject(this.editProject.id, this.editProject).subscribe({    // Only for json-server
                next: (response: Project) => {
                    // Update Project to Grid
                    let project: Project = new Project();
                    project.projectID = response.projectID;
                    //project.id = response.id;  // Only for json-server
                    project.projectName = response.projectName;
                    project.dateOfStart = response.dateOfStart;
                    project.teamSize = response.teamSize;
                    project.active = response.active;
                    project.status = response.status;
                    project.clientLocationID = response.clientLocationID;
                    project.clientLocation = response.clientLocation;

                    //to replace the object based on the condition
                    this.projects = this.projects.map((item) => (item.projectID === project.projectID ? project : item));

                    // Handle "Cancel" button click event
                    $('#editCancelButton').trigger('click');

                },
                error: (error) => {
                    console.log(error);
                },
                complete: () => {
                    console.log('Completed successfully!');
                }
            });
        }
    }

    onDeleteClick(projectID: number): void {

        let existingProject = this.projects.find((item) => item.projectID === projectID);
        if (existingProject !== undefined) {
            this.deleteProject.projectID = existingProject.projectID;
            //this.deleteProject.id = this.projects[index].id;   //  Only for json-server
            this.deleteProject.projectName = existingProject.projectName;
        }
    }

    onDeleteConfirmClick(): void {

        this.projectService.deleteProject(this.deleteProject.projectID).subscribe({
            //this.projectService.deleteProject(this.deleteProject.id).subscribe({   // Only for json-server
            next: () => {
                // Delete Project from Grid
                // Use filter() to remove the project based on the condition
                this.projects = this.projects.filter((item) => item.projectID !== this.deleteProject.projectID);

                // Clear Delete Project Dialog
                this.deleteProject.projectID = null;
                //this.deleteProject.id = null;  // Only for json-server
                this.deleteProject.projectName = null;

                this.calculateNumberOfPages();
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    /*
    onSearchClick(): void {
        this.projectService.searchProjects(this.searchBy, this.searchText).subscribe({
            next: (response: Project[]) => {
                this.projects = response;
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => {
                console.log('Completed successfully!');
            }
        });
    }
    */

    onNewClick() {

        let obj = {
            'projectID': null,
            'projectName': null,
            'dateOfStart': null,
            'teamSize': null,
            'active': false,
            'status': null,
            'clientLocationID': null,
            'selectedClientLocationName': null
        };
        this.newForm.setValue(obj);
        this.newForm.resetForm(this.newForm.value);
    }

    onHideShowDetails() {

        /*
        // First Way
        let activities : ProjectComponent[] = this.projectsChild.toArray(); // Convert QueryList<ProjectComponent> to ProjectComponent[]
        activities.forEach(activity => {
            activity.projectsService.hideDetails = !activity.projectsService.hideDetails;
        });
        */
        this.projectService.toggleDetails();
    }

    isAllCheckedChange() {
        this.projectsChild.forEach(projectChild => {
            projectChild.isAllCheckedChangeChild(this.isAllChecked);
        });
    }

    onModalInsertShown() {  // this method will execute automatically after the Insert modal has been fully displayed to the user.

        this.inputCreateProjectID.nativeElement.focus();
    }

    onModalEditShown() { // this method will execute automatically after the Edit modal has been fully displayed to the user.

        this.inputUpdateProjectName.nativeElement.focus();
    }

    onSearchTeaxtKeyup() {

        this.calculateNumberOfPages();
    }

    calculateNumberOfPages() {

        let filterPipe = new FilterPipe();
        let resultProjects = filterPipe.transform(this.projects, this.searchBy, this.searchText);
        let numberOfPages = Math.ceil(resultProjects.length / this.pageSize);
        this.pages  = new Array(numberOfPages);
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

}
