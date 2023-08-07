"use strict";
(self["webpackChunkTaskManager"] = self["webpackChunkTaskManager"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ 2429);
/* harmony import */ var _guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/can-activate-guard.service */ 3018);
/* harmony import */ var _guards_not_authenticated_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/not-authenticated-guard.service */ 8878);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 9166);
/* harmony import */ var _guards_redirection_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/redirection-guard.service */ 1296);
/* harmony import */ var _guards_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/can-deactivate-guard.service */ 9678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, data: { linkIndex: 0 } },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, canActivate: [_guards_redirection_guard_service__WEBPACK_IMPORTED_MODULE_6__.RedirectionGuardService], data: { linkIndex: 1 } },
    { path: 'signup', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__.SignUpComponent, canActivate: [_guards_not_authenticated_guard_service__WEBPACK_IMPORTED_MODULE_4__.NotAuthenticatedGuardService], canDeactivate: [_guards_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_7__.CanDeactivateGuardService], data: { linkIndex: 2 } },
    { path: 'my-profile', component: _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__.MyProfileComponent, canActivate: [_guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_3__.CanActivateGuardService], data: { expectedRoles: ["Admin", "Employee"], linkIndex: 5 } },
    { path: 'admin', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then(m => m.AdminModule) },
    { path: 'employee', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_employee_employee_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./employee/employee.module */ 4375)).then(m => m.EmployeeModule) } // leazy loading EmployeeModule
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, { useHash: true, enableTracing: false, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_9__.PreloadAllModules })], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _helpers_my_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/my-animations */ 6444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/login.service */ 4120);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _services_router_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/router-logger.service */ 202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);








const _c0 = function () { return ["/admin", "dashboard"]; };
const _c1 = function () { return ["/admin", "projects"]; };
const _c2 = function () { return ["/admin", "masters"]; };
function AppComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Masters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c2));
} }
const _c3 = function () { return ["/employee", "tasks"]; };
function AppComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c3));
} }
const _c4 = function () { return ["/my-profile"]; };
function AppComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_14_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.loginService.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.loginService.getCurrentUser().userName);
} }
const _c5 = function () { return ["/login"]; };
const _c6 = function () { return ["/signup"]; };
function AppComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c6));
} }
const _c7 = function () { return ["/about"]; };
class AppComponent {
    constructor(loginService, domSanitizer, routerLoggerService, router) {
        this.loginService = loginService;
        this.domSanitizer = domSanitizer;
        this.routerLoggerService = routerLoggerService;
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe({
            next: (event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
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
    getState(outlet) {
        return (outlet.isActivated) ?
            outlet.activatedRoute.snapshot.url[0].path && outlet.activatedRouteData["linkIndex"] :
            "none";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_router_logger_service__WEBPACK_IMPORTED_MODULE_2__.RouterLoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 19, vars: 7, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-success"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-md-0"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [4, "ngIf"], ["outlet", "outlet"], [1, "nav-link", 2, "cursor", "pointer", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Angular Task Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AppComponent_ng_container_12_Template, 10, 6, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AppComponent_ng_container_13_Template, 4, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AppComponent_ng_container_14_Template, 7, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AppComponent_ng_container_15_Template, 7, 4, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "router-outlet", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.isAuthenticated() && ((tmp_1_0 = ctx.loginService.getCurrentUser()) == null ? null : tmp_1_0.role) == "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.isAuthenticated() && ((tmp_2_0 = ctx.loginService.getCurrentUser()) == null ? null : tmp_2_0.role) == "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loginService.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@routeAnimations", ctx.getState(_r4));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [_helpers_my_animations__WEBPACK_IMPORTED_MODULE_0__.slideLeftOrRightAnimation] } });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/jwt-interceptor.service */ 7678);
/* harmony import */ var _interceptors_jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/jwt-un-authorized-interceptor.service */ 2353);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 9166);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ 2429);
/* harmony import */ var _directives_alert_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/alert.directive */ 4827);
/* harmony import */ var _directives_repeater_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/repeater.directive */ 4281);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
            useClass: _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_3__.JwtInterceptorService,
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
            useClass: _interceptors_jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_4__.JwtUnAuthorizedInterceptorService,
            multi: true
        },
        _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe
    ], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__.JwtModule.forRoot({
                config: {
                    tokenGetter: () => {
                        return ((sessionStorage.getItem("currrentUser") != null) ?
                            JSON.parse(sessionStorage.getItem("currrentUser")).token : null);
                    }
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__.AboutComponent,
        _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_7__.MyProfileComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__.SignUpComponent,
        _directives_alert_directive__WEBPACK_IMPORTED_MODULE_8__.AlertDirective,
        _directives_repeater_directive__WEBPACK_IMPORTED_MODULE_9__.RepeaterDirective], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__.JwtModule] }); })();


/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutComponent {
    constructor() { }
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about"]], decls: 38, vars: 0, consts: [[1, "text-secondary", "text-uppercase", "fw-semibold", "text-center"], [1, "row", "row-cols-1", "row-cols-md-2", "row-cols-md-3", "g-4"], [1, "col"], [1, "card"], ["src", "assets/aboutOne.jpg", "alt", "AboutOne", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["src", "assets/aboutTwo.jpg", "alt", "aboutTwo", 1, "card-img-top"], ["src", "assets/aboutThree.jpg", "alt", "aboutThree", 1, "card-img-top"], ["src", "assets/aboutFour.jpg", "alt", "aboutFour", 1, "card-img-top"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "How We Are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem, ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit tempora et ea impedit provident dolores architecto voluptatibus beatae sequi. Laudantium iusto quis dicta doloremque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem ipsum dolor sit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, tenetur? Dolorem illo ullam incidunt nobis quo est, eius minima esse autem id illum, reiciendis mollitia delectus omnis praesentium ad alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis eaque nam repudiandae. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lorem, ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, tenetur? Dolorem illo ullam incidunt nobis quo est, eius minima esse autem id illum, reiciendis mollitia delectus omnis praesentium ad alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Lorem ipsum dolor sit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, tenetur? Dolorem illo ullam incidunt nobis quo est, eius minima esse autem id illum, reiciendis mollitia delectus omnis praesentium ad alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, labore. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _models_login_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/login-view-model */ 6355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ 4120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _directives_alert_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/alert.directive */ 4827);







const _c0 = ["inputEmailInLoginForm"];
function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("error", ctx_r0.loginError);
} }
class LoginComponent {
    // Constructor
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        // Properties
        this.loginViewModel = new _models_login_view_model__WEBPACK_IMPORTED_MODULE_0__.LoginViewModel();
        this.loginError = null;
    }
    // Methods
    ngOnInit() {
    }
    onClickLogin() {
        this.loginService.login(this.loginViewModel).subscribe({
            next: (response) => {
                if (this.loginService.getCurrentUser().role == "Admin") {
                    this.router.navigate(['/admin', 'dashboard']);
                }
                else {
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
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputEmail = _t.first);
    } }, decls: 28, vars: 3, consts: [[1, "row"], [1, "col-md-9", "col-lg-6", "col-xl-5", "mx-auto"], [1, "card", "mt-4"], [1, "card-header", "text-bg-secondary"], ["appAlert", "", 3, "error", 4, "ngIf"], [1, "my-3", "ps-4"], ["routerLink", "/signup"], [1, "card-body"], [1, "row", "mb-3"], ["for", "txtEmailLogin", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "email", "id", "txtEmailLogin", "placeholder", "Email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["inputEmailInLoginForm", ""], ["for", "txtPasswordLogin", 1, "col-sm-4", "col-form-label"], ["type", "password", "id", "txtPasswordLogin", "placeholder", "Password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer", "text-end"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["appAlert", "", 3, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 1, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Not Yet Registred? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) { return ctx.loginViewModel.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_24_listener($event) { return ctx.loginViewModel.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener() { return ctx.onClickLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginError != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.loginViewModel.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.loginViewModel.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _directives_alert_directive__WEBPACK_IMPORTED_MODULE_2__.AlertDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2429:
/*!***************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfileComponent": () => (/* binding */ MyProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MyProfileComponent {
    constructor() { }
    ngOnInit() { }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(); };
MyProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 62, vars: 0, consts: [[1, "container"], [1, "row", "gutters-sm", "mt-3"], [1, "col-md-4", "mb-3"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-column", "align-items-center", "text-center"], ["src", "assets/my-profile.png", "alt", "Admin", "width", "150", 1, "rounded-circle"], [1, "mt-3"], [1, "text-secondary", "mb-1"], [1, "text-muted", "font-size-sm"], [1, "btn", "btn-primary", "me-2"], [1, "btn", "btn-outline-primary"], [1, "col-md-8"], [1, "card", "mb-3"], [1, "row"], [1, "col-sm-3"], [1, "mb-0"], [1, "col-sm-9", "text-secondary"], [1, "col-sm-12"], [1, "btn", "btn-info"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Full Stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bay Area, San Francisco, CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Kenneth Valdez ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " fip@jukmuh.al ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " (239) 816-9029 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " (320) 380-4539 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Bay Area, San Francisco, CA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9166:
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _models_sign_up_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/sign-up-view-model */ 5911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/custom-validators.service */ 6077);
/* harmony import */ var _services_sign_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sign-up.service */ 9471);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ 4120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);









const _c0 = ["inputFirstNameSignUp"];

function SignUpComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.signUpError, " ");
  }
}

function SignUpComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " First name can't be blank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " First name should contain atleast 2 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignUpComponent_div_20_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SignUpComponent_div_20_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.signUpForm.get("personName.firstName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r2.signUpForm.get("personName.firstName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]);
  }
}

function SignUpComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Last name can't be blank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Last name should contain atleast 2 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignUpComponent_div_26_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SignUpComponent_div_26_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.signUpForm.get("personName.lastName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r3.signUpForm.get("personName.lastName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]);
  }
}

function SignUpComponent_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Email can't be blank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Email is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_32_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Duplicate email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignUpComponent_div_32_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SignUpComponent_div_32_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SignUpComponent_div_32_div_3_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r4.signUpForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r4.signUpForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r4.signUpForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["duplicateEmail"]);
  }
}

function SignUpComponent_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password can't be blank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignUpComponent_div_38_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r5.signUpForm.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}

function SignUpComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Confirm password can't be blank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password and Confirm Password do not match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Mobile can't be blank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_51_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Mobile is invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignUpComponent_div_51_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SignUpComponent_div_51_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r8.signUpForm.get("mobile")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r8.signUpForm.get("mobile")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}

function SignUpComponent_div_57_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Date of birth can't be blank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_57_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Minimum age must be 18. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignUpComponent_div_57_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SignUpComponent_div_57_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r9.signUpForm.get("dateOfBirth")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r9.signUpForm.get("dateOfBirth")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minAge"]);
  }
}

function SignUpComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const genderOption_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "radioGender" + genderOption_r27)("value", genderOption_r27.charAt(0).toLowerCase() + genderOption_r27.slice(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", "radioGender" + genderOption_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](genderOption_r27);
  }
}

function SignUpComponent_div_63_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Plese select gender. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignUpComponent_div_63_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r11.signUpForm.get("gender")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}

function SignUpComponent_option_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const country_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", country_r29.countryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", country_r29.countryName, " ");
  }
}

function SignUpComponent_div_72_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select country. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignUpComponent_div_72_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r13.signUpForm.get("countryID")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}

function SignUpComponent_div_83_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Skill name can't be blank. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_83_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignUpComponent_div_83_div_3_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const skill_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = skill_r31.get("skillName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}

function SignUpComponent_div_83_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select expertise level. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignUpComponent_div_83_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignUpComponent_div_83_div_16_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const skill_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = skill_r31.get("expertiseLevel")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}

const _c1 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};

function SignUpComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SignUpComponent_div_83_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Select Please");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Beginner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Intermediate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Proficient");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Expert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SignUpComponent_div_83_div_16_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignUpComponent_div_83_Template_i_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40);
      const i_r32 = restoredCtx.index;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r39.onRemoveSkill(i_r32);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const skill_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c1, ((tmp_1_0 = skill_r31.get("skillName")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = skill_r31.get("skillName")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = skill_r31.get("skillName")) == null ? null : tmp_1_0.touched) || ctx_r14.signUpForm.submitted), ((tmp_1_0 = skill_r31.get("skillName")) == null ? null : tmp_1_0.valid) && (((tmp_1_0 = skill_r31.get("skillName")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = skill_r31.get("skillName")) == null ? null : tmp_1_0.touched) || ctx_r14.signUpForm.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_2_0 = skill_r31.get("skillName")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = skill_r31.get("skillName")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = skill_r31.get("skillName")) == null ? null : tmp_2_0.touched) || ctx_r14.signUpForm.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](8, _c1, ((tmp_3_0 = skill_r31.get("expertiseLevel")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = skill_r31.get("expertiseLevel")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = skill_r31.get("expertiseLevel")) == null ? null : tmp_3_0.touched) || ctx_r14.signUpForm.submitted), ((tmp_3_0 = skill_r31.get("expertiseLevel")) == null ? null : tmp_3_0.valid) && (((tmp_3_0 = skill_r31.get("expertiseLevel")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = skill_r31.get("expertiseLevel")) == null ? null : tmp_3_0.touched) || ctx_r14.signUpForm.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_4_0 = skill_r31.get("expertiseLevel")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = skill_r31.get("expertiseLevel")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = skill_r31.get("expertiseLevel")) == null ? null : tmp_4_0.touched) || ctx_r14.signUpForm.submitted));
  }
}

class SignUpComponent {
  // Constructor
  constructor(formBuilder, customValidatorsService, signUpService, loginService, router) {
    this.formBuilder = formBuilder;
    this.customValidatorsService = customValidatorsService;
    this.signUpService = signUpService;
    this.loginService = loginService;
    this.router = router;
    this.genderOptions = ['Male', 'Female'];
    this.countries = [];
    this.signUpViewModel = new _models_sign_up_view_model__WEBPACK_IMPORTED_MODULE_0__.SignUpViewModel();
    this.signUpError = null;
    this.canLeave = true; // by default the user can leave the current route
  } // Methods


  ngOnInit() {
    this.signUpService.getAllCountries().subscribe({
      next: response => {
        this.countries = response;
      }
    });
    this.signUpForm = this.formBuilder.group({
      personName: this.formBuilder.group({
        firstName: [null, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]
        }],
        lastName: [null, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]
        }]
      }),
      email: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email],
        asyncValidators: [this.customValidatorsService.duplicateEmail()],
        updateOn: 'blur' // async validator run only when the input field loses focus (on blur).

      }],
      password: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }],
      confirmPassword: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }],
      mobile: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]
      }],
      dateOfBirth: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.customValidatorsService.minimumAgeValidator(18)]
      }],
      gender: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }],
      countryID: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }],
      receiveNewsLetters: null,
      skills: this.formBuilder.array([])
    }, {
      validators: this.customValidatorsService.compareValidator("confirmPassword", "password")
    }); // Add the custom property to the FormGroup

    this.signUpForm.submitted = false;
    this.signUpForm.valueChanges.subscribe({
      next: value => {
        // Do something here ....
        //console.log(value);
        this.canLeave = false; // the user can't leave the current route
      }
    });
  }

  ngAfterViewInit() {
    this.inputFirstName.nativeElement.focus();
  }

  onSubmitSignUp() {
    this.signUpForm.submitted = true;

    if (this.signUpForm.valid) {
      this.signUpViewModel = this.signUpForm.value;
      this.signUpService.signUp(this.signUpViewModel).subscribe({
        next: response => {
          if (this.loginService.getCurrentUser().role == "Admin") {
            this.router.navigate(['/admin', 'dashboard']);
          } else {
            this.router.navigate(['/employee', 'tasks']);
          }

          this.signUpForm.submitted = false;
          this.canLeave = true;
        },
        error: error => {
          console.log(error);
          this.signUpError = "Invalid Data";
        }
      });
    } // Get value of form element
    // console.log(this.signUpForm.value.personName.firstName);
    // console.log(this.signUpForm.value.personName.lastName);
    // console.log(this.signUpForm.value.email);
    // console.log(this.signUpForm.value.gender);
    // Display current form value
    //console.log(this.signUpForm);
    //console.log(this.signUpForm.value);
    // Set value (you must set value of all form elements)
    // this.signUpForm.setValue({
    //   firstName: "John",
    //   lastName: "Smith",
    //   email: "John123@gmail.com",
    //   password: "John@1234",
    //   confirmPassword: "John@1234",
    //   mobile: "+1 (433) 461-5572",
    //   dateOfBirth: new Date(2000, 6, 24),
    //   gender: "male",
    //   countryID: 1,
    //   receiveNewsLetters :true
    // })
    //console.log(this.signUpForm.value);
    // PatchValue (set the specific value that you want to update)
    // this.signUpForm.patchValue({
    //   firstName: "John",
    //   lastName: "Smith",
    //   email: "John123@gmail.com",
    //   password: "John@1234",
    //   confirmPassword: "John@1234"
    // })
    // console.log(this.signUpForm.value);
    // Reset the form (clear all form elements and set them to null)
    // this.signUpForm.reset();
    // console.log(this.signUpForm.value);
    // Reset with parameters (clear all form elements set to null + updates the values by using those given values)
    // this.signUpForm.reset({
    //   firstName: "David",
    //   lastName: "Drown",
    //   email: "David123@gmail.com"
    // });
    // console.log(this.signUpForm.value);

  }

  get skills() {
    return this.signUpForm.get("skills");
  }

  initialSkills() {
    return this.formBuilder.group({
      skillName: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }],
      expertiseLevel: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }]
    });
  }

  onAddSkill() {
    this.skills.push(this.initialSkills());
  }

  onRemoveSkill(index) {
    this.skills.removeAt(index);
  }

}

SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
  return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_1__.CustomValidatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_sign_up_service__WEBPACK_IMPORTED_MODULE_2__.SignUpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};

SignUpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SignUpComponent,
  selectors: [["app-sign-up"]],
  viewQuery: function SignUpComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.inputFirstName = _t.first);
    }
  },
  decls: 89,
  vars: 47,
  consts: [["novalidate", "novalidate", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-9", "col-lg-6", "col-xl-5", "mx-auto"], [1, "card", "mt-4"], [1, "card-header", "text-bg-secondary"], ["class", "alert alert-danger", "role", "alert", 4, "Ngif"], [1, "my-3", "ps-4"], ["routerLink", "/login"], [1, "card-body"], ["formGroupName", "personName", 1, "row", "mb-3"], ["for", "txtFirstNameSignUp", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtFirstNameSignUp", "placeholder", "FirstName", "name", "firstName", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["inputFirstNameSignUp", ""], [4, "ngIf"], ["for", "txtLastNameSignUp", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtLastNameSignUp", "placeholder", "LastName", "name", "lastName", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], [1, "row", "mb-3"], ["for", "txtEmailSignUp", 1, "col-sm-4", "col-form-label"], ["type", "email", "id", "txtEmailSignUp", "placeholder", "Email", "name", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "txtPasswordSignUp", 1, "col-sm-4", "col-form-label"], ["type", "password", "id", "txtPasswordSignUp", "placeholder", "Password", "name", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["for", "txtConfirmPasswordSignUp", 1, "col-sm-4", "col-form-label"], ["type", "password", "id", "txtConfirmPasswordSignUp", "placeholder", "Confirm Password", "name", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "txtMobileSignUp", 1, "col-sm-4", "col-form-label"], ["type", "tel", "id", "txtMobileSignUp", "placeholder", "Mobile", "name", "mobile", "formControlName", "mobile", 1, "form-control", 3, "ngClass"], ["for", "txtDateOfBirthSignUp", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtDateOfBirthSignUp", "name", "dateOfBirth", "formControlName", "dateOfBirth", 1, "form-control", 3, "ngClass"], [1, "mb-3", "row", "align-items-center"], [1, "col-sm-4", "col-form-label"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["class", "col-sm-8 offset-sm-4", 4, "ngIf"], [1, "mb-3", "row"], ["for", "txtCountrySignUp", 1, "col-sm-4", "col-form-label"], ["name", "countryID", "id", "txtCountrySignUp", "formControlName", "countryID", 1, "form-select", 3, "ngClass"], ["value", "null", "disabled", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], ["type", "checkbox", "value", "true", "id", "textReceiveNewsLettersSignUp", "name", "receiveNewsLetters", "formControlName", "receiveNewsLetters", 1, "form-check-input", "me-1"], ["for", "textReceiveNewsLettersSignUp", 1, "form-check-label"], ["formArrayName", "skills", 1, "mb-3", "row"], ["for", "txtSkillsSignUp", 1, "col-sm-4"], [1, "col-12", "mt-2"], ["class", "d-flex mb-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "card-footer", "text-end"], ["type", "submit", 1, "btn", "btn-primary"], ["role", "alert", 1, "alert", "alert-danger"], [1, "text-danger"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "gender", "formControlName", "gender", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [1, "col-sm-8", "offset-sm-4"], [3, "value"], [1, "d-flex", "mb-2", 3, "formGroupName"], [1, "col-5", "me-2"], ["type", "text", "id", "txtSkillsSignUp", "placeholder", "Skill Name", "name", "skillName", "formControlName", "skillName", 1, "form-control", 3, "ngClass"], ["name", "expertiseLevel", "formControlName", "expertiseLevel", 1, "form-select", 3, "ngClass"], ["value", "null", "selected", ""], ["value", "Beginner"], ["value", "Intermediate"], ["value", "Proficient"], ["value", "Expert"], [1, "col-2", "d-flex", "align-items-center", "justify-content-center"], [1, "fa-solid", "fa-trash", "text-danger", 2, "cursor", "pointer", 3, "click"]],
  template: function SignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmitSignUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "SignUp");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SignUpComponent_div_7_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Already Registred? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "FirstName");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SignUpComponent_div_20_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "LastName");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SignUpComponent_div_26_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, SignUpComponent_div_32_Template, 4, 3, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, SignUpComponent_div_38_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Confirm Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, SignUpComponent_div_44_Template, 2, 0, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, SignUpComponent_div_45_Template, 2, 0, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Mobile");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, SignUpComponent_div_51_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Date Of Birth");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, SignUpComponent_div_57_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Gender");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, SignUpComponent_div_62_Template, 4, 4, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, SignUpComponent_div_63_Template, 2, 1, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "select", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](71, SignUpComponent_option_71_Template, 2, 2, "option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, SignUpComponent_div_72_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, " Receive News Letters ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](83, SignUpComponent_div_83_Template, 19, 11, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_84_listener() {
        return ctx.onAddSkill();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Add Skill");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "button", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_13_0;
      let tmp_14_0;
      let tmp_15_0;
      let tmp_16_0;
      let tmp_18_0;
      let tmp_19_0;
      let tmp_21_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.signUpForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Ngif", ctx.signUpError != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](23, _c1, ((tmp_2_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_2_0.touched) || ctx.signUpForm.submitted), ((tmp_2_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_2_0.valid) && (((tmp_2_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_2_0.touched) || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.signUpForm.get("personName.firstName")) == null ? null : tmp_3_0.touched) || ctx.signUpForm.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](26, _c1, ((tmp_4_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_4_0.touched) || ctx.signUpForm.submitted), ((tmp_4_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_4_0.valid) && (((tmp_4_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_4_0.touched) || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.signUpForm.get("personName.lastName")) == null ? null : tmp_5_0.touched) || ctx.signUpForm.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](29, _c1, ((tmp_6_0 = ctx.signUpForm.get("email")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.signUpForm.get("email")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.signUpForm.get("email")) == null ? null : tmp_6_0.touched) || ctx.signUpForm.submitted), ((tmp_6_0 = ctx.signUpForm.get("email")) == null ? null : tmp_6_0.valid) && (((tmp_6_0 = ctx.signUpForm.get("email")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.signUpForm.get("email")) == null ? null : tmp_6_0.touched) || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.signUpForm.get("email")) == null ? null : tmp_7_0.invalid) && (((tmp_7_0 = ctx.signUpForm.get("email")) == null ? null : tmp_7_0.dirty) || ((tmp_7_0 = ctx.signUpForm.get("email")) == null ? null : tmp_7_0.touched) || ctx.signUpForm.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](32, _c1, ((tmp_8_0 = ctx.signUpForm.get("password")) == null ? null : tmp_8_0.invalid) && (((tmp_8_0 = ctx.signUpForm.get("password")) == null ? null : tmp_8_0.dirty) || ((tmp_8_0 = ctx.signUpForm.get("password")) == null ? null : tmp_8_0.touched) || ctx.signUpForm.submitted), ((tmp_8_0 = ctx.signUpForm.get("password")) == null ? null : tmp_8_0.valid) && (((tmp_8_0 = ctx.signUpForm.get("password")) == null ? null : tmp_8_0.dirty) || ((tmp_8_0 = ctx.signUpForm.get("password")) == null ? null : tmp_8_0.touched) || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.signUpForm.get("password")) == null ? null : tmp_9_0.invalid) && (((tmp_9_0 = ctx.signUpForm.get("password")) == null ? null : tmp_9_0.dirty) || ((tmp_9_0 = ctx.signUpForm.get("password")) == null ? null : tmp_9_0.touched) || ctx.signUpForm.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](35, _c1, ((tmp_10_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_10_0.invalid) && (((tmp_10_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_10_0.dirty) || ((tmp_10_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_10_0.touched) || ctx.signUpForm.submitted), ((tmp_10_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_10_0.valid) && (((tmp_10_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_10_0.dirty) || ((tmp_10_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_10_0.touched) || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_11_0.invalid) && (((tmp_11_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_11_0.dirty) || ((tmp_11_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_11_0.touched) || ctx.signUpForm.submitted) && ((tmp_11_0 = ctx.signUpForm.get("confirmPassword")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.signUpForm.invalid && (ctx.signUpForm.dirty || ctx.signUpForm.touched || ctx.signUpForm.submitted) && (ctx.signUpForm.errors == null ? null : ctx.signUpForm.errors["compareValidator"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](38, _c1, ((tmp_13_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_13_0.invalid) && (((tmp_13_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_13_0.dirty) || ((tmp_13_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_13_0.touched) || ctx.signUpForm.submitted), ((tmp_13_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_13_0.valid) && (((tmp_13_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_13_0.dirty) || ((tmp_13_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_13_0.touched) || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_14_0.invalid) && (((tmp_14_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_14_0.dirty) || ((tmp_14_0 = ctx.signUpForm.get("mobile")) == null ? null : tmp_14_0.touched) || ctx.signUpForm.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](41, _c1, ((tmp_15_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_15_0.invalid) && (((tmp_15_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_15_0.dirty) || ((tmp_15_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_15_0.touched) || ctx.signUpForm.submitted), ((tmp_15_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_15_0.valid) && (((tmp_15_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_15_0.dirty) || ((tmp_15_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_15_0.touched) || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_16_0.invalid) && (((tmp_16_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_16_0.dirty) || ((tmp_16_0 = ctx.signUpForm.get("dateOfBirth")) == null ? null : tmp_16_0.touched) || ctx.signUpForm.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.genderOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx.signUpForm.get("gender")) == null ? null : tmp_18_0.invalid) && (((tmp_18_0 = ctx.signUpForm.get("gender")) == null ? null : tmp_18_0.dirty) || ((tmp_18_0 = ctx.signUpForm.get("gender")) == null ? null : tmp_18_0.touched) || ctx.signUpForm.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](44, _c1, ((tmp_19_0 = ctx.signUpForm.get("countryID")) == null ? null : tmp_19_0.invalid) && (((tmp_19_0 = ctx.signUpForm.get("countryID")) == null ? null : tmp_19_0.dirty) || ((tmp_19_0 = ctx.signUpForm.get("countryID")) == null ? null : tmp_19_0.touched) || ctx.signUpForm.submitted), ((tmp_19_0 = ctx.signUpForm.get("countryID")) == null ? null : tmp_19_0.valid) && (((tmp_19_0 = ctx.signUpForm.get("countryID")) == null ? null : tmp_19_0.dirty) || ((tmp_19_0 = ctx.signUpForm.get("countryID")) == null ? null : tmp_19_0.touched) || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_21_0 = ctx.signUpForm.get("countryID")) == null ? null : tmp_21_0.invalid) && (((tmp_21_0 = ctx.signUpForm.get("countryID")) == null ? null : tmp_21_0.dirty) || ((tmp_21_0 = ctx.signUpForm.get("countryID")) == null ? null : tmp_21_0.touched) || ctx.signUpForm.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.skills.controls);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 4827:
/*!***********************************************!*\
  !*** ./src/app/directives/alert.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertDirective": () => (/* binding */ AlertDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AlertDirective {
    //elementRef property represents the host element = an html element in which the directive is invoked
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.divElement = this.renderer.createElement("div");
        this.renderer.addClass(this.divElement, "alert");
        this.renderer.addClass(this.divElement, "alert-danger");
        this.renderer.setAttribute(this.divElement, "role", "alert");
        this.renderer.setStyle(this.divElement, "transition", "transform 0.5s");
        this.spanElement = this.renderer.createElement("span");
        this.spanText = this.renderer.createText(this.error);
        this.renderer.appendChild(this.spanElement, this.spanText);
        this.renderer.appendChild(this.divElement, this.spanElement);
        // Append the alert to the nativeElement 
        let element = this.elementRef.nativeElement;
        this.renderer.appendChild(element, this.divElement);
        this.titleProperty = "Please try again!";
    }
    // when the mouse enter the element
    onMouseEnter() {
        // Add styles using Renderer2
        this.renderer.setStyle(this.divElement, "transform", "scale(1.1)");
    }
    // when the mouse leaves the element
    onMouseLeave() {
        // Add styles using Renderer2
        this.renderer.setStyle(this.divElement, "transform", "scale(1)");
    }
}
AlertDirective.ɵfac = function AlertDirective_Factory(t) { return new (t || AlertDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
AlertDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AlertDirective, selectors: [["", "appAlert", ""]], hostVars: 1, hostBindings: function AlertDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AlertDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function AlertDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("title", ctx.titleProperty);
    } }, inputs: { error: "error" } });


/***/ }),

/***/ 4281:
/*!**************************************************!*\
  !*** ./src/app/directives/repeater.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeaterDirective": () => (/* binding */ RepeaterDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class RepeaterDirective {
    // the structural directive is a directive which creates an embedded view inside template view
    // the viewContainerRef represents the reference of the child view that is created by using the structural directive.
    // the TemplateRef represents the reference of <ng-template></ng-template> tag that is created automatically
    constructor(viewContainerRef, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.viewContainerRef.clear(); // because i want to create my own embedded view
    }
    ngOnInit() {
        for (let i = 0; i < this.counter; i++) {
            this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: i });
        }
    }
}
RepeaterDirective.ɵfac = function RepeaterDirective_Factory(t) { return new (t || RepeaterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
RepeaterDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RepeaterDirective, selectors: [["", "appRepeater", ""]], inputs: { counter: ["appRepeater", "counter"] } });


/***/ }),

/***/ 3018:
/*!******************************************************!*\
  !*** ./src/app/guards/can-activate-guard.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanActivateGuardService": () => (/* binding */ CanActivateGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/login.service */ 4120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);




class CanActivateGuardService {
    constructor(loginService, router, jwtHelperService) {
        this.loginService = loginService;
        this.router = router;
        this.jwtHelperService = jwtHelperService;
    }
    canActivate(route, state) {
        //console.log(route.url);
        var token = (sessionStorage.getItem("currentUser") != null) ?
            JSON.parse(sessionStorage.getItem("currentUser")).token : null;
        if (this.loginService.isAuthenticated() &&
            route.data['expectedRoles'].includes(this.jwtHelperService.decodeToken(token).role)) {
            return true; // the user can navigate to the particular route
        }
        else {
            this.router.navigate(['/login']);
            return false; // the user can't navigate to the particular route
        }
    }
}
CanActivateGuardService.ɵfac = function CanActivateGuardService_Factory(t) { return new (t || CanActivateGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService)); };
CanActivateGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CanActivateGuardService, factory: CanActivateGuardService.ɵfac, providedIn: 'root' // by default it is injected in root level
 });


/***/ }),

/***/ 9678:
/*!********************************************************!*\
  !*** ./src/app/guards/can-deactivate-guard.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanDeactivateGuardService": () => (/* binding */ CanDeactivateGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CanDeactivateGuardService {
    constructor() { }
    canDeactivate(component, currentRoute, currentState, nextState) {
        if (component.canLeave == true) {
            return true; // user can leave the current route
        }
        return confirm("Do you want to discard changes?");
    }
}
CanDeactivateGuardService.ɵfac = function CanDeactivateGuardService_Factory(t) { return new (t || CanDeactivateGuardService)(); };
CanDeactivateGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanDeactivateGuardService, factory: CanDeactivateGuardService.ɵfac, providedIn: 'root' // it is enregistred as root level service
 });


/***/ }),

/***/ 8878:
/*!***********************************************************!*\
  !*** ./src/app/guards/not-authenticated-guard.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotAuthenticatedGuardService": () => (/* binding */ NotAuthenticatedGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/login.service */ 4120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class NotAuthenticatedGuardService {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.loginService.isAuthenticated()) {
            // If user is not authenticated, allow access to the route
            return true;
        }
        else {
            // If user is authenticated, doesn't allow you access to the particular route
            return false;
        }
    }
}
NotAuthenticatedGuardService.ɵfac = function NotAuthenticatedGuardService_Factory(t) { return new (t || NotAuthenticatedGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
NotAuthenticatedGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotAuthenticatedGuardService, factory: NotAuthenticatedGuardService.ɵfac, providedIn: 'root' // by default it is injected in root level
 });


/***/ }),

/***/ 1296:
/*!*****************************************************!*\
  !*** ./src/app/guards/redirection-guard.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectionGuardService": () => (/* binding */ RedirectionGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/login.service */ 4120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class RedirectionGuardService {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(route, state) {
        var _a;
        if (this.loginService.isAuthenticated()) {
            if (((_a = this.loginService.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.role) == "Admin") {
                this.router.navigate(['/admin', 'dashboard']);
                return true;
            }
            else {
                this.router.navigate(['/employee', 'tasks']);
                return true;
            }
        }
        else {
            return true;
        }
    }
}
RedirectionGuardService.ɵfac = function RedirectionGuardService_Factory(t) { return new (t || RedirectionGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
RedirectionGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RedirectionGuardService, factory: RedirectionGuardService.ɵfac, providedIn: 'root' // by default it is injected in root level
 });


/***/ }),

/***/ 6444:
/*!******************************************!*\
  !*** ./src/app/helpers/my-animations.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeAnimation": () => (/* binding */ fadeAnimation),
/* harmony export */   "slideUpAnimation": () => (/* binding */ slideUpAnimation),
/* harmony export */   "zoomUpAnimation": () => (/* binding */ zoomUpAnimation),
/* harmony export */   "zoomLeftAnimation": () => (/* binding */ zoomLeftAnimation),
/* harmony export */   "slideLeftOrRightAnimation": () => (/* binding */ slideLeftOrRightAnimation),
/* harmony export */   "keyFrameAnimation": () => (/* binding */ keyFrameAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const fadeAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("routeAnimations", [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("* <=> *", [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter, :leave", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'absolute', width: '98%' }), { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }))
            ], { optional: true }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":leave", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }))
            ], { optional: true })
        ])
    ])
]);
const slideUpAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("routeAnimations", [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("* <=> *", [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter, :leave", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'absolute', width: '98%' }), { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(100%)' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":leave", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-100%)' }))
            ], { optional: true })
        ])
    ])
]);
const zoomUpAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("routeAnimations", [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("* <=> *", [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter, :leave", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'absolute', width: '98%' }), { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(0) translateY(100%)' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1) translateY(0%)' }))
            ], { optional: true }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":leave", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1) translateY(0%)' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(0) translateY(-100%)' }))
            ], { optional: true })
        ])
    ])
]);
const zoomLeftAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("routeAnimations", [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("* <=> *", [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter, :leave", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'absolute', width: '98%' }), { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(0) translateX(100%)' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1) translateX(0%)' }))
            ], { optional: true }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":leave", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1) translateX(0%)' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(0) translateX(-100%)' }))
            ], { optional: true })
        ])
    ])
]);
const slideLeftOrRightAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("routeAnimations", [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("0 => 1", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("0 => 2", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("0 => 3", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("0 => 4", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("0 => 5", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("1 => 0", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("1 => 2", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("1 => 3", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("1 => 4", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("1 => 5", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("2 => 0", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("2 => 1", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("2 => 3", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("2 => 4", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("2 => 5", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("3 => 0", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("3 => 1", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("3 => 2", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("3 => 4", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("3 => 5", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("4 => 0", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("4 => 1", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("4 => 2", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("4 => 3", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("4 => 5", slideRight()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("5 => 0", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("5 => 1", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("5 => 2", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("5 => 3", slideLeft()),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("5 => 4", slideLeft()),
]);
function slideLeft() {
    return [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter, :leave", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'absolute', width: '98%' }), { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(100%)' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":leave", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-100%)' }))
            ], { optional: true })
        ])
    ];
}
function slideRight() {
    return [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter, :leave", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'absolute', width: '98%' }), { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-100%)' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":leave", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(100%)' }))
            ], { optional: true })
        ])
    ];
}
const keyFrameAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("routeAnimations", [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("* <=> *", [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter, :leave", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'absolute', width: '98%' }), { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("1s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ offset: 0, transform: 'scale(0) translateX(100%)', 'transform-origin': 'center left' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ offset: 0.3, transform: 'scale(0.5) translateX(30%)', 'transform-origin': 'center left' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ offset: 0.7, transform: 'scale(0.5) translateX(30%)', 'transform-origin': 'center left' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ offset: 1, transform: 'scale(1) translateX(0%)', 'transform-origin': 'center left' }),
                ]))
            ], { optional: true }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":leave", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("1s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ offset: 0, transform: 'scale(1) translateX(0%)', 'transform-origin': 'center right' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ offset: 0.3, transform: 'scale(0.5) translateX(-30%)', 'transform-origin': 'center right' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ offset: 0.7, transform: 'scale(0.5) translateX(-30%)', 'transform-origin': 'center right' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ offset: 1, transform: 'scale(0) translateX(-100%)', 'transform-origin': 'center right' }),
                ]))
            ], { optional: true })
        ])
    ])
]);


/***/ }),

/***/ 7678:
/*!*********************************************************!*\
  !*** ./src/app/interceptors/jwt-interceptor.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptorService": () => (/* binding */ JwtInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class JwtInterceptorService {
    constructor() { }
    intercept(request, next) {
        var currentUser = { token: "" };
        if (sessionStorage["currentUser"] != null) {
            currentUser = JSON.parse(sessionStorage["currentUser"]);
        }
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + currentUser.token
            }
        });
        return next.handle(request);
    }
}
JwtInterceptorService.ɵfac = function JwtInterceptorService_Factory(t) { return new (t || JwtInterceptorService)(); };
JwtInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptorService, factory: JwtInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2353:
/*!***********************************************************************!*\
  !*** ./src/app/interceptors/jwt-un-authorized-interceptor.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtUnAuthorizedInterceptorService": () => (/* binding */ JwtUnAuthorizedInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class JwtUnAuthorizedInterceptorService {
    constructor() { }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)({
            next: (event) => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
                    // Do Something here
                }
            },
            error: (error) => {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
                    if (error.status == 401) {
                        console.log(error);
                        alert('401 UnAuthorized!');
                    }
                }
            }
        }));
    }
}
JwtUnAuthorizedInterceptorService.ɵfac = function JwtUnAuthorizedInterceptorService_Factory(t) { return new (t || JwtUnAuthorizedInterceptorService)(); };
JwtUnAuthorizedInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtUnAuthorizedInterceptorService, factory: JwtUnAuthorizedInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6355:
/*!********************************************!*\
  !*** ./src/app/models/login-view-model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginViewModel": () => (/* binding */ LoginViewModel)
/* harmony export */ });
class LoginViewModel {
    // Constructor
    constructor() {
        this.email = "";
        this.password = "";
    }
}


/***/ }),

/***/ 5911:
/*!**********************************************!*\
  !*** ./src/app/models/sign-up-view-model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonFullName": () => (/* binding */ PersonFullName),
/* harmony export */   "SignUpViewModel": () => (/* binding */ SignUpViewModel)
/* harmony export */ });
class PersonFullName {
    constructor() {
        this.firstName = null;
        this.lastName = null;
    }
}
;
class SignUpViewModel {
    constructor() {
        this.personName = new PersonFullName();
        this.email = null;
        this.mobile = null;
        this.dateOfBirth = null;
        this.password = null;
        this.confirPassword = null;
        this.gender = null;
        this.countryID = null;
        this.receiveNewsLetters = false;
        this.skills = [];
    }
}


/***/ }),

/***/ 6077:
/*!*******************************************************!*\
  !*** ./src/app/services/custom-validators.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomValidatorsService": () => (/* binding */ CustomValidatorsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sign_up_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.service */ 9471);



class CustomValidatorsService {
    constructor(signUpService) {
        this.signUpService = signUpService;
    }
    minimumAgeValidator(minimumAge) {
        return (control) => {
            if (control.value == null) {
                return null; // retgurn null if Date of birth is null
            }
            let toDay = new Date();
            let dateOfBirth = new Date(control.value);
            let timeDiff = Math.abs(toDay.getTime() - dateOfBirth.getTime());
            let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
            if (age >= minimumAge) {
                return null; // Date of birth is valid
            }
            return { minAge: { valid: false } }; // Date of birth is invalid
        };
    }
    compareValidator(controlToValidate, controlToCompare) {
        return (formGroup) => {
            var _a, _b, _c, _d;
            if (((_a = formGroup.get(controlToValidate)) === null || _a === void 0 ? void 0 : _a.value) == null) { // return null if Confirm Password is null
                return null;
            }
            if (((_b = formGroup.get(controlToCompare)) === null || _b === void 0 ? void 0 : _b.value) == ((_c = formGroup.get(controlToValidate)) === null || _c === void 0 ? void 0 : _c.value)) { //  controlToValidate == controlToCompare
                return null; // Valid
            }
            else {
                (_d = formGroup.get(controlToValidate)) === null || _d === void 0 ? void 0 : _d.setErrors({ compareValidator: { valid: false } });
                return { compareValidator: { valid: false } }; // Invalid
            }
        };
    }
    duplicateEmail() {
        return (control) => {
            return this.signUpService.getUserByEmail(control.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((user) => {
                if (user != null) {
                    return { duplicateEmail: { valid: false } }; // Invalid
                }
                return null; // Valid
            }));
        };
    }
}
CustomValidatorsService.ɵfac = function CustomValidatorsService_Factory(t) { return new (t || CustomValidatorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_sign_up_service__WEBPACK_IMPORTED_MODULE_0__.SignUpService)); };
CustomValidatorsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomValidatorsService, factory: CustomValidatorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4120:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);






class LoginService {
    // Constructor
    constructor(httpBackend, router, jwtHelperService) {
        this.httpBackend = httpBackend;
        this.router = router;
        this.jwtHelperService = jwtHelperService;
        // Properties
        //currentUserName: any = null;
        this.httpClient = null;
    }
    login(loginViewModel) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend); // httpClient represents HttpClient without Interceptors
        return this.httpClient.post('api/account/authenticate', loginViewModel, { responseType: 'json' })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((user) => {
            if (user != null) {
                //this.currentUserName = user.userName;
                // after the user in loged JWT token will be generated on the server an the same will be sent to de browser and stored in Session Storage
                sessionStorage['currentUser'] = JSON.stringify(user);
            }
            return user;
        }));
    }
    logout() {
        sessionStorage.removeItem('currentUser');
        //this.currentUserName = null;
        this.router.navigate(['/login']);
    }
    isAuthenticated() {
        var token = (sessionStorage.getItem("currentUser") != null) ?
            JSON.parse(sessionStorage.getItem("currentUser")).token : null;
        if (this.jwtHelperService.isTokenExpired(token)) {
            return false; // token is invalid
        }
        else {
            return true; // token is valid
        }
    }
    getCurrentUser() {
        var currentUser = (sessionStorage.getItem("currentUser") != null) ?
            JSON.parse(sessionStorage.getItem("currentUser")) : null;
        return currentUser;
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__.JwtHelperService)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3225:
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsService": () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);




class ProjectsService {
    constructor(httpClient, datePipe) {
        this.httpClient = httpClient;
        this.datePipe = datePipe;
        this.myBehaviorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false); // false = current value stored in it 
    }
    toggleDetails() {
        // this.hideDetails = !this.hideDetails;
        this.myBehaviorSubject.next(!this.myBehaviorSubject.value); // Pass notification to all subscribers at-a-time without skip any one
    }
    /*
   
      // Json-server package:
      getAllProjects(): Observable<Project[]> {
        return this.httpClient.get<Project[]>(this.jsonServerUrl, { responseType: 'json' })
          .pipe(map(
            (dataResponse: Project[]) => {
              for (let i = 0; i < dataResponse.length; i++) {
                dataResponse[i].dateOfStart = this.datePipe.transform(dataResponse[i].dateOfStart, "yyyy-MM-dd");
              }
              return dataResponse;
            }
          ));
      }
    
      insertProject(newProject: Project): Observable<Project> {
        return this.httpClient.post<Project>(this.jsonServerUrl, newProject, { responseType: 'json' })
          .pipe(map(
            (dataResponse: Project) => {
              dataResponse.dateOfStart = this.datePipe.transform(dataResponse.dateOfStart, "yyyy-MM-dd");
              return dataResponse;
            }
          ));
      }
    
      getProjectByProjectID(id: number): Observable<Project> {
        return this.httpClient.get<Project>(`${this.jsonServerUrl}/${id}`, { responseType: 'json' })
          .pipe(map(
            (dataResponse: Project) => {
              dataResponse.dateOfStart = this.datePipe.transform(dataResponse.dateOfStart, "yyyy-MM-dd");
              return dataResponse;
            }
          ));
      }
    
      updateProject(id: number, existingProject: Project): Observable<Project> {
        return this.httpClient.put<Project>(`${this.jsonServerUrl}/${id}`, existingProject, { responseType: 'json' })
        .pipe(map(
          (dataResponse: Project) => {
            dataResponse.dateOfStart = this.datePipe.transform(dataResponse.dateOfStart, "yyyy-MM-dd");
            return dataResponse;
          }
        ));
      }
    
      deleteProject(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.jsonServerUrl}/${id}`);
      }
    
      searchProjects(searchBy: string, searchText: string): Observable<Project[]> {
        return this.httpClient.get<Project[]>(`${this.jsonServerUrl}?${searchBy}=${searchText}`, { responseType: 'json' })
          .pipe(map(
            (dataResponse: Project[]) => {
              for (let i = 0; i < dataResponse.length; i++) {
                dataResponse[i].dateOfStart = this.datePipe.transform(dataResponse[i].dateOfStart, "yyyy-MM-dd");
              }
              return dataResponse;
            }
          ));
      }
   
    */
    // Asp .Net Core Web API
    getAllProjects() {
        //debugger; // adding another debugger as breakpoint here.
        return this.httpClient.get('api/projects', { responseType: 'json' })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((dataResponse) => {
            for (let i = 0; i < dataResponse.length; i++) {
                dataResponse[i].dateOfStart = this.datePipe.transform(dataResponse[i].dateOfStart, "yyyy-MM-dd");
            }
            //debugger; // adding another debugger as breakpoint here.
            return dataResponse;
        }));
    }
    insertProject(newProject) {
        return this.httpClient.post('api/projects', newProject, { responseType: 'json' })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((dataResponse) => {
            dataResponse.dateOfStart = this.datePipe.transform(dataResponse.dateOfStart, "yyyy-MM-dd");
            return dataResponse;
        }));
    }
    getProjectByProjectID(projectID) {
        return this.httpClient.get(`api/projects/${projectID}`, { responseType: 'json' })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((dataResponse) => {
            if (dataResponse != null) {
                dataResponse.dateOfStart = this.datePipe.transform(dataResponse.dateOfStart, "yyyy-MM-dd");
            }
            return dataResponse;
        }));
    }
    updateProject(projectID, existingProject) {
        return this.httpClient.put(`api/projects/${projectID}`, existingProject, { responseType: 'json' })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((dataResponse) => {
            dataResponse.dateOfStart = this.datePipe.transform(dataResponse.dateOfStart, "yyyy-MM-dd");
            return dataResponse;
        }));
    }
    deleteProject(projectID) {
        return this.httpClient.delete(`api/projects/${projectID}`);
    }
    searchProjects(searchBy, searchText) {
        return this.httpClient.get(`api/projects/search?searchBy=${searchBy}&searchText=${searchText}`, { responseType: 'json' })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((dataResponse) => {
            for (let i = 0; i < dataResponse.length; i++) {
                dataResponse[i].dateOfStart = this.datePipe.transform(dataResponse[i].dateOfStart, "yyyy-MM-dd");
            }
            return dataResponse;
        }));
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe)); };
ProjectsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' // this service available globaly for the entire project
 });


/***/ }),

/***/ 202:
/*!***************************************************!*\
  !*** ./src/app/services/router-logger.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterLoggerService": () => (/* binding */ RouterLoggerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class RouterLoggerService {
    // Constructor
    constructor(httpBackend, httpClient) {
        this.httpBackend = httpBackend;
        this.httpClient = httpClient;
    }
    // Methods
    log(logMessage) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend); // httpClient represents HttpClient without Interceptors
        return this.httpClient.post('api/RouterLogger', logMessage, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("content-type", "text/plain") });
    }
}
RouterLoggerService.ɵfac = function RouterLoggerService_Factory(t) { return new (t || RouterLoggerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
RouterLoggerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RouterLoggerService, factory: RouterLoggerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9471:
/*!*********************************************!*\
  !*** ./src/app/services/sign-up.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpService": () => (/* binding */ SignUpService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class SignUpService {
    constructor(httpBackend, httpClient) {
        this.httpBackend = httpBackend;
        this.httpClient = httpClient;
    }
    signUp(signUpViewModel) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend); // httpClient represents HttpClient without Interceptors
        return this.httpClient.post('api/account/register', signUpViewModel, { responseType: 'json' })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((user) => {
            if (user != null) {
                //this.currentUserName = user.userName;
                // after the user in loged JWT token will be generated on the server an the same will be sent to de browser and stored in Session Storage
                sessionStorage['currentUser'] = JSON.stringify(user);
            }
            return user;
        }));
    }
    getUserByEmail(email) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend); // httpClient represents HttpClient without Interceptors
        return this.httpClient.get(`api/account/getUserByEmail/${email}`, { responseType: 'json' });
    }
    getAllCountries() {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend); // httpClient represents HttpClient without Interceptors
        return this.httpClient.get(`api/account`, { responseType: 'json' });
    }
}
SignUpService.ɵfac = function SignUpService_Factory(t) { return new (t || SignUpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
SignUpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SignUpService, factory: SignUpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3481:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/directives/client-location-status-validator.directive.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLocationStatusValidatorDirective": () => (/* binding */ ClientLocationStatusValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class ClientLocationStatusValidatorDirective {
    constructor() { }
    validate(control) {
        // console.log(`control.value.selectedClientLocationName : '${control.value.selectedClientLocationName}'`);
        // console.log(`control.value.status : '${control.value.status}'`);
        if (control.value.status == "Support" && control.value.selectedClientLocationName == "New York") {
            //console.log("Invalid");
            return { clientLocationStatus: { valid: false } }; //invalid
        }
        else {
            //console.log("Valid");
            return null; //valid
        }
    }
}
ClientLocationStatusValidatorDirective.ɵfac = function ClientLocationStatusValidatorDirective_Factory(t) { return new (t || ClientLocationStatusValidatorDirective)(); };
ClientLocationStatusValidatorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ClientLocationStatusValidatorDirective, selectors: [["", "clientLocationStatusValidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
                useExisting: ClientLocationStatusValidatorDirective,
                multi: true
            }
        ])] });


/***/ }),

/***/ 2302:
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/component-loader.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentLoaderDirective": () => (/* binding */ ComponentLoaderDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ComponentLoaderDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ComponentLoaderDirective.ɵfac = function ComponentLoaderDirective_Factory(t) { return new (t || ComponentLoaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
ComponentLoaderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ComponentLoaderDirective, selectors: [["", "appComponentLoader", ""]] });


/***/ }),

/***/ 5034:
/*!***************************************************************************!*\
  !*** ./src/app/shared/directives/project-idunique-validator.directive.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectIDUniqueValidatorDirective": () => (/* binding */ ProjectIDUniqueValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/projects.service */ 3225);




class ProjectIDUniqueValidatorDirective {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    validate(control) {
        return this.projectsService.getProjectByProjectID(control.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            if (response != null) {
                return { uniqueProjectID: { valid: false } };
            }
            else {
                return null;
            }
        }));
    }
}
ProjectIDUniqueValidatorDirective.ɵfac = function ProjectIDUniqueValidatorDirective_Factory(t) { return new (t || ProjectIDUniqueValidatorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService)); };
ProjectIDUniqueValidatorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ProjectIDUniqueValidatorDirective, selectors: [["", "projectIDUniqueValidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_ASYNC_VALIDATORS,
                useExisting: ProjectIDUniqueValidatorDirective,
                multi: true
            }
        ])] });


/***/ }),

/***/ 265:
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/team-size-validator.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamSizeValidatorDirective": () => (/* binding */ TeamSizeValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class TeamSizeValidatorDirective {
    // Constructor
    constructor() {
        // Propeties
        this.amount = null;
    }
    // Methods
    validate(control) {
        let currentValueControl = control.value;
        let isValid = ((currentValueControl % this.amount) == 0);
        if (isValid) {
            return null; // Valid Input
        }
        else {
            return { divisible: { valid: false } }; //  Invalid Input
        }
    }
}
TeamSizeValidatorDirective.ɵfac = function TeamSizeValidatorDirective_Factory(t) { return new (t || TeamSizeValidatorDirective)(); };
TeamSizeValidatorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TeamSizeValidatorDirective, selectors: [["", "teamSizeValidator", ""]], inputs: { amount: ["teamSizeValidator", "amount"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
                useExisting: TeamSizeValidatorDirective,
                multi: true
            }
        ])] });


/***/ }),

/***/ 8738:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FilterPipe {
    transform(value, searchBy, searchText) {
        if (value == null) {
            return null;
        }
        if ((searchBy === null || searchBy.trim() === "") ||
            (searchText === null || searchText.trim() === "")) {
            return value;
        }
        let resultArray = [];
        resultArray = value.filter((item) => {
            // Convert property value and searchText to lowercase for case-insensitive search
            let propertyValue = item[searchBy].toString().toLowerCase();
            let searchValue = searchText.toLowerCase();
            return propertyValue.includes(searchValue);
        });
        return resultArray;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: false });


/***/ }),

/***/ 9383:
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/number-to-words.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberToWordsPipe": () => (/* binding */ NumberToWordsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NumberToWordsPipe {
    transform(value, separator = ", ") {
        //debugger;
        if (value == null) { // value represents the current value of component property
            return null;
        }
        else {
            return this.inWords(value, separator);
        }
    }
    inWords(number, separator) {
        //debugger;
        let a = [
            '', 'One', 'Two', 'Three', 'Four',
            'Five', 'Six', 'Seven', 'Eight', 'Nine',
            'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
            'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
        ];
        let b = [
            '', '', 'Twenty', 'Thirty', 'Forty',
            'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
        ];
        let g = [
            '', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion',
            'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion'
        ];
        const arr = (x) => Array.from(x);
        const num = (x) => Number(x) || 0;
        const str = (x) => String(x);
        const isEmpty = (xs) => xs.length === 0;
        const take = (n) => (xs) => xs.slice(0, n);
        const drop = (n) => (xs) => xs.slice(n);
        const reverse = (xs) => xs.slice(0).reverse();
        const comp = (f) => (g) => (x) => f(g(x));
        const not = (x) => !x;
        const chunk = (n) => (xs) => isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];
        let makeGroup = ([ones, tens, huns]) => {
            return [
                num(huns) === 0 ? '' : a[huns] + ' Hundred ',
                num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
                a[tens + ones] || a[ones]
            ].join('');
        };
        let thousand = (group, i) => group === '' ? group : `${group} ${g[i]}`;
        if (typeof number === 'number')
            return this.inWords(str(number), separator);
        else if (number === '0')
            return 'Zero';
        else
            //debugger;
            return comp(chunk(3))(reverse)(arr(number))
                .map(makeGroup)
                .map(thousand)
                .filter(comp(not)(isEmpty))
                .reverse()
                .join(separator);
    }
}
NumberToWordsPipe.ɵfac = function NumberToWordsPipe_Factory(t) { return new (t || NumberToWordsPipe)(); };
NumberToWordsPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "numberToWords", type: NumberToWordsPipe, pure: true });


/***/ }),

/***/ 8566:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/paging.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagingPipe": () => (/* binding */ PagingPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PagingPipe {
    transform(value, currentPageIndex, pageSize) {
        if (value == null) {
            return null;
        }
        let resultArray = [];
        let startIndex = currentPageIndex * pageSize; //1  => 3,4,5
        let endIndex = startIndex + pageSize; // 6
        resultArray = value.slice(startIndex, endIndex);
        return resultArray;
    }
}
PagingPipe.ɵfac = function PagingPipe_Factory(t) { return new (t || PagingPipe)(); };
PagingPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "paging", type: PagingPipe, pure: false });


/***/ }),

/***/ 3010:
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/sort.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortPipe": () => (/* binding */ SortPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SortPipe {
    transform(value, sortBy, sortOrder) {
        if (value == null) {
            return null;
        }
        if (sortBy === null || sortBy.trim() === "") {
            return value;
        }
        let sortedArray = value.slice().sort((object1, object2) => {
            let sortByOne = object1.hasOwnProperty(sortBy) ? object1[sortBy] : '';
            let sortByTwo = object2.hasOwnProperty(sortBy) ? object2[sortBy] : '';
            if (typeof sortByOne != typeof sortByOne) {
                return 0;
            }
            else { //  they have the same type
                switch (typeof sortByOne) {
                    case 'string':
                        sortByOne = object1[sortBy].toUpperCase();
                        sortByTwo = object2[sortBy].toUpperCase();
                        return this.sortingTwoProperties(sortByOne, sortByTwo);
                    case 'number':
                        return this.sortingTwoProperties(sortByOne, sortByTwo);
                    default:
                        return 0;
                }
            }
        });
        if (sortOrder == "ASC") {
            return sortedArray;
        }
        else {
            return sortedArray.reverse();
        }
    }
    sortingTwoProperties(propOne, propTwo) {
        if (propOne < propTwo) {
            return -1;
        }
        else if (propOne > propTwo) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sort", type: SortPipe, pure: false });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/team-size-validator.directive */ 265);
/* harmony import */ var _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/client-location-status-validator.directive */ 3481);
/* harmony import */ var _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/project-idunique-validator.directive */ 5034);
/* harmony import */ var _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/number-to-words.pipe */ 9383);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/filter.pipe */ 8738);
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/paging.pipe */ 8566);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/component-loader.directive */ 2302);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/sort.pipe */ 3010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);












class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule
        ], _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_0__.TeamSizeValidatorDirective,
        _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_1__.ClientLocationStatusValidatorDirective,
        _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_2__.ProjectIDUniqueValidatorDirective,
        _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_3__.NumberToWordsPipe,
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe,
        _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_5__.PagingPipe,
        _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_6__.ComponentLoaderDirective,
        _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_7__.SortPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule], exports: [_directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_0__.TeamSizeValidatorDirective,
        _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_1__.ClientLocationStatusValidatorDirective,
        _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_2__.ProjectIDUniqueValidatorDirective,
        _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_3__.NumberToWordsPipe,
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe,
        _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_5__.PagingPipe,
        _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_6__.ComponentLoaderDirective,
        _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_7__.SortPipe,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map