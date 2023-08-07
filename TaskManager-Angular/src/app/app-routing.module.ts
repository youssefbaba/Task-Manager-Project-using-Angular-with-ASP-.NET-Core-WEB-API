import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { CanActivateGuardService } from './guards/can-activate-guard.service';
import { NotAuthenticatedGuardService } from './guards/not-authenticated-guard.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RedirectionGuardService } from './guards/redirection-guard.service';
import { CanDeactivateGuardService } from './guards/can-deactivate-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'about', component: AboutComponent , data: {linkIndex : 0}},
  { path: 'login', component: LoginComponent, canActivate: [RedirectionGuardService], data: {linkIndex : 1}},
  { path: 'signup', component: SignUpComponent, canActivate: [NotAuthenticatedGuardService], canDeactivate: [CanDeactivateGuardService], data: {linkIndex : 2}},
  { path: 'my-profile', component: MyProfileComponent, canActivate: [CanActivateGuardService], data: { expectedRoles: ["Admin", "Employee"], linkIndex: 5} },
  { path: 'admin', loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)},  // Leazy loading AdminModule
  { path: 'employee', loadChildren: () => import("./employee/employee.module").then(m => m.EmployeeModule)}  // leazy loading EmployeeModule
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true , enableTracing:false, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
