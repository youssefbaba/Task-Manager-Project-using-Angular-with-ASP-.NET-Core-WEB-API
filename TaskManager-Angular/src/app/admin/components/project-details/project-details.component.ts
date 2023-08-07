import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from '../../../models/project';
import { ProjectsService } from '../../../services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  // Properties
  detailProject: Project;
  routeParamsSubscription!: Subscription;

  // Constructor
  // activatedRoute represents the current route
  constructor(private activatedRoute: ActivatedRoute, 
    private projectsService: ProjectsService) {

    this.detailProject = new Project();
  }

  // Methods
  ngOnInit(): void {

    this.routeParamsSubscription = this.activatedRoute.params.subscribe({
      next: (params) => {
        let projectID = params["projectID"];
        this.projectsService.getProjectByProjectID(projectID).subscribe({
          next: (response: Project) => {
            if (response != null) {
              this.detailProject = response;
            }
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
  }

}
