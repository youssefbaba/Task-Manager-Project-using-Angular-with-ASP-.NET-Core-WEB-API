import { Component, OnInit, } from '@angular/core';
import { LoginService } from './services/login.service';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLoggerService } from './services/router-logger.service';
import { NavigationEnd, Router } from '@angular/router';
import { fadeAnimation, keyFrameAnimation, slideLeftOrRightAnimation, slideUpAnimation, zoomLeftAnimation, zoomUpAnimation } from './helpers/my-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [fadeAnimation]
  // animations: [slideUpAnimation]
  // animations: [zoomUpAnimation]
  // animations: [zoomLeftAnimation]
  animations: [slideLeftOrRightAnimation]
  //animations: [keyFrameAnimation] 
})
export class AppComponent implements OnInit {

  constructor(public loginService: LoginService,
    private domSanitizer: DomSanitizer,
    private routerLoggerService: RouterLoggerService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          let userName = (this.loginService.getCurrentUser() != null) ?
            this.loginService.getCurrentUser().userName : "anonymous";

          let logMessage = `${new Date().toLocaleString()} : ${userName} navigate to ${event.url}`;

          this.routerLoggerService.log(logMessage).subscribe();
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  /*
  mySanitizedInnerHtml = "<iframe src='https://www.w3schools.com' title='W3Schools Free Online Web Tutorials'></iframe>";

  mySanitizedHref = "javascript:window.open('https://www.w3schools.com')" ;

  untrustedURL  = "https://www.mmlpqtpkasjdashdjahd.com";

  myUnSanitizedInnerHtml = this.domSanitizer.bypassSecurityTrustHtml(this.mySanitizedInnerHtml);

  myUnSanitizedHref = this.domSanitizer.bypassSecurityTrustUrl(this.mySanitizedHref);

  trustedURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.untrustedURL);
  */

  getState(outlet: any) {  // outlet represents router-outlet
    return (outlet.isActivated) ? 
    outlet.activatedRoute.snapshot.url[0].path && outlet.activatedRouteData["linkIndex"] :
    "none";
  }

}



