import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { CheckBoxPrinterComponent } from './components/check-box-printer/check-box-printer.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountriesComponent } from './components/countries/countries.component';
import { ClientLocationsComponent } from './components/client-locations/client-locations.component';
import { TaskPrioritiesComponent } from './components/task-priorities/task-priorities.component';
import { TaskStatusComponent } from './components/task-status/task-status.component';
import { MastersComponent } from './components/masters/masters.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProjectsComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    CheckBoxPrinterComponent,
    CountriesComponent,
    ClientLocationsComponent,
    TaskPrioritiesComponent,
    TaskStatusComponent,
    MastersComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  exports: [
    DashboardComponent,
    ProjectsComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    CheckBoxPrinterComponent
  ],
  providers: [],
  entryComponents: [ // list of component that i want to load dynumically
    CountriesComponent, ClientLocationsComponent,
    TaskPrioritiesComponent, TaskStatusComponent
  ]
})
export class AdminModule { }
