import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginViewModel } from '../../models/login-view-model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  // Properties
  loginViewModel: LoginViewModel = new LoginViewModel();
  loginError: any = null;
  @ViewChild("inputEmailInLoginForm") inputEmail!: ElementRef;

  // Constructor
  constructor(private loginService: LoginService, private router: Router) { }

  // Methods
  ngOnInit(): void {
  }

  onClickLogin(): void {
    this.loginService.login(this.loginViewModel).subscribe({
      next: (response: any) => {
        if (this.loginService.getCurrentUser().role == "Admin") {
          this.router.navigate(['/admin', 'dashboard']);
        } else {
          this.router.navigate(['/employee', 'tasks']);
        }
      },
      error: (error) => {
        console.log(error);
        this.loginError = "Invalid Email or Password";
      }
    });
  }

  ngAfterViewInit() {
    
    this.inputEmail.nativeElement.focus();
  }

}
