import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuardService } from '../../guards/can-activate-guard.service';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ProjectDetailsComponent } from '../components/project-details/project-details.component';
import { MastersComponent } from '../components/masters/masters.component';

const routes: Routes = [
  {
    path: '', canActivate: [CanActivateGuardService], data: { expectedRoles: ["Admin"] }, children: [
      { path: 'dashboard', component: DashboardComponent, data: {linkIndex: 1} },   // admin/dashboard
      { path: 'projects', component: ProjectsComponent, data: {linkIndex: 2} },     // admin/projects
      { path: 'projects/view/:projectID', component: ProjectDetailsComponent, data: {linkIndex: 3} },
      { path: 'masters', component: MastersComponent, data: {linkIndex: 4} }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
