"use strict";
(self["webpackChunkTaskManager"] = self["webpackChunkTaskManager"] || []).push([["src_app_employee_employee_module_ts"],{

/***/ 2073:
/*!**************************************************************************!*\
  !*** ./src/app/employee/components/create-task/create-task.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTaskComponent": () => (/* binding */ CreateTaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/projects.service */ 3225);
/* harmony import */ var src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/employees.service */ 4640);
/* harmony import */ var src_app_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task-priorities.service */ 162);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tasks.service */ 2632);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);










function CreateTaskComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Task Title can't be blank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function CreateTaskComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const project_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", project_r7.projectID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", project_r7.projectName, " ");
  }
}

function CreateTaskComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select project, to which the task belongs to. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function CreateTaskComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const employee_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", employee_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", employee_r8.userName, " ");
  }
}

function CreateTaskComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select the employee, to whom the task id assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function CreateTaskComponent_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const taskPriority_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", taskPriority_r9.taskPriorityID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", taskPriority_r9.taskPriorityName, " ");
  }
}

function CreateTaskComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select the priority of the task.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};

const _c1 = function () {
  return ["/employee", "tasks"];
};

class CreateTaskComponent {
  // Constructor
  constructor(projectsService, employeesService, taskPrioritiesService, router, tasksService, formBuilder) {
    this.projectsService = projectsService;
    this.employeesService = employeesService;
    this.taskPrioritiesService = taskPrioritiesService;
    this.router = router;
    this.tasksService = tasksService;
    this.formBuilder = formBuilder;
  } // Methods


  ngOnInit() {
    this.newTaskForm = this.formBuilder.group({
      taskTitle: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }],
      description: null,
      projectID: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }],
      assignedTo: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }],
      taskPriorityID: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }],
      currentStatus: "Holding"
    });
    this.projects = this.projectsService.getAllProjects();
    this.employees = this.employeesService.getAllEmployees();
    this.taskPriorities = this.taskPrioritiesService.getTaskPriorities();
    this.newTaskForm.submitted = false;
  }

  onSubmitTask() {
    this.newTaskForm.submitted = true;

    if (this.newTaskForm.valid) {
      this.tasksService.insertTask(this.newTaskForm.value).subscribe({
        next: response => {
          this.router.navigate(['/employee', 'tasks']);
          this.newTaskForm.reset({
            taskTitle: null,
            description: null,
            projectID: null,
            assignedTo: null,
            taskPriorityID: null,
            currentStatus: "Holding"
          });
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }

}

CreateTaskComponent.ɵfac = function CreateTaskComponent_Factory(t) {
  return new (t || CreateTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_1__.EmployeesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_2__.TaskPrioritiesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_3__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
};

CreateTaskComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CreateTaskComponent,
  selectors: [["app-create-task"]],
  decls: 59,
  vars: 32,
  consts: [["novalidate", "novalidate", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "taskTitle", 1, "text-info", 2, "font-size", "18px"], ["type", "text", "id", "taskTitle", "placeholder", "Task Title", "formControlName", "taskTitle", "autofocus", "autofocus", 1, "form-control", 2, "font-size", "20px", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "description", 1, "text-info"], ["id", "description", "placeholder", "Description", "formControlName", "description", 1, "form-control"], [1, "col-lg-6"], [1, "form-group", "form-row"], ["for", "projectID", 1, "text-info", "col-md-3", "col-form-label"], [1, "col-md-9"], ["id", "projectID", "formControlName", "projectID", 1, "form-control", 3, "ngClass"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "assignedTo", 1, "text-info", "col-md-3", "col-form-label"], ["id", "assignedTo", "formControlName", "assignedTo", 1, "form-control", 3, "ngClass"], ["for", "taskPriorityID", 1, "text-info", "col-md-3", "col-form-label"], ["id", "taskPriorityID", "formControlName", "taskPriorityID", 1, "form-control", 3, "ngClass"], ["for", "currentStatus", 1, "text-info", "col-md-3", "col-form-label"], ["type", "text", "id", "currentStatus", "formControlName", "currentStatus", "readonly", "", 1, "form-control-plaintext", "readonlyField"], [1, "col-lg-12", "border-top", "text-center"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", "mt-2"], [1, "btn", "btn-info", "text-white", "btn-sm", "mt-1", 3, "routerLink"], [1, "text-danger"], [3, "value"]],
  template: function CreateTaskComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Create Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CreateTaskComponent_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmitTask();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Task Title:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CreateTaskComponent_div_9_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Description:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "textarea", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Project:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, CreateTaskComponent_option_24_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, CreateTaskComponent_div_26_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Assigned To:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, CreateTaskComponent_option_34_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, CreateTaskComponent_div_36_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Priority:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, CreateTaskComponent_option_45_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, CreateTaskComponent_span_47_Template, 2, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Status:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Create Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Back to Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_11_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newTaskForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](19, _c0, ((tmp_1_0 = ctx.newTaskForm.get("taskTitle")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.newTaskForm.get("taskTitle")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.newTaskForm.get("taskTitle")) == null ? null : tmp_1_0.touched) || ctx.newTaskForm.submitted), ((tmp_1_0 = ctx.newTaskForm.get("taskTitle")) == null ? null : tmp_1_0.valid) && (((tmp_1_0 = ctx.newTaskForm.get("taskTitle")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.newTaskForm.get("taskTitle")) == null ? null : tmp_1_0.touched) || ctx.newTaskForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.newTaskForm.get("taskTitle")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.newTaskForm.get("taskTitle")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.newTaskForm.get("taskTitle")) == null ? null : tmp_2_0.touched) || ctx.newTaskForm.submitted) && ((tmp_2_0 = ctx.newTaskForm.get("taskTitle")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](22, _c0, ((tmp_3_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_3_0.touched) || ctx.newTaskForm.submitted), ((tmp_3_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_3_0.valid) && (((tmp_3_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_3_0.touched) || ctx.newTaskForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 13, ctx.projects));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_5_0.touched) || ctx.newTaskForm.submitted) && ((tmp_5_0 = ctx.newTaskForm.get("projectID")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](25, _c0, ((tmp_6_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_6_0.touched) || ctx.newTaskForm.submitted), ((tmp_6_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_6_0.valid) && (((tmp_6_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_6_0.touched) || ctx.newTaskForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](35, 15, ctx.employees));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_8_0.invalid) && (((tmp_8_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_8_0.dirty) || ((tmp_8_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_8_0.touched) || ctx.newTaskForm.submitted) && ((tmp_8_0 = ctx.newTaskForm.get("assignedTo")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](28, _c0, ((tmp_9_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_9_0.invalid) && (((tmp_9_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_9_0.dirty) || ((tmp_9_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_9_0.touched) || ctx.newTaskForm.submitted), ((tmp_9_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_9_0.valid) && (((tmp_9_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_9_0.dirty) || ((tmp_9_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_9_0.touched) || ctx.newTaskForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](46, 17, ctx.taskPriorities));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_11_0.invalid) && (((tmp_11_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_11_0.dirty) || ((tmp_11_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_11_0.touched) || ctx.newTaskForm.submitted) && ((tmp_11_0 = ctx.newTaskForm.get("taskPriorityID")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](31, _c1));
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".readonlyField[_ngcontent-%COMP%] {\n  cursor: default;\n  border: none;\n  box-shadow: none;\n  background-color: #EEE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoiY3JlYXRlLXRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVhZG9ubHlGaWVsZHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG59Il19 */"]
});

/***/ }),

/***/ 2948:
/*!**********************************************************************!*\
  !*** ./src/app/employee/components/edit-task/edit-task.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTaskComponent": () => (/* binding */ EditTaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_models_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/task */ 8872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/projects.service */ 3225);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/employees.service */ 4640);
/* harmony import */ var src_app_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/task-priorities.service */ 162);
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tasks.service */ 2632);
/* harmony import */ var src_app_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/task-statuses.service */ 5441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);












function EditTaskComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Task Title can't be blank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function EditTaskComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const project_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", project_r9.projectID);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", project_r9.projectName, " ");
  }
}

function EditTaskComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please select project, to which the task belongs to. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function EditTaskComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const employee_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", employee_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", employee_r10.userName, " ");
  }
}

function EditTaskComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please select the employee, to whom the task id assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function EditTaskComponent_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const taskPriority_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", taskPriority_r11.taskPriorityID);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", taskPriority_r11.taskPriorityName, " ");
  }
}

function EditTaskComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please select the priority of the task.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function EditTaskComponent_option_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const taskStatus_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", taskStatus_r12.taskStatusID);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", taskStatus_r12.taskStatusName, " ");
  }
}

function EditTaskComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please select the Status of the task.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};

const _c1 = function () {
  return ["/employee", "tasks"];
};

class EditTaskComponent {
  // Constructor
  constructor(projectsService, activatedRoute, employeesService, taskPrioritiesService, router, tasksService, formBuilder, taskStatusesService) {
    this.projectsService = projectsService;
    this.activatedRoute = activatedRoute;
    this.employeesService = employeesService;
    this.taskPrioritiesService = taskPrioritiesService;
    this.router = router;
    this.tasksService = tasksService;
    this.formBuilder = formBuilder;
    this.taskStatusesService = taskStatusesService;
    this.currentTask = new src_app_models_task__WEBPACK_IMPORTED_MODULE_0__.Task();
  } // Methods


  ngOnInit() {
    this.editTaskForm = this.formBuilder.group({
      taskID: null,
      taskTitle: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
      }],
      description: null,
      projectID: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
      }],
      assignedTo: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
      }],
      taskPriorityID: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
      }],
      currentTaskStatusID: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
      }]
    });
    this.projects = this.projectsService.getAllProjects();
    this.employees = this.employeesService.getAllEmployees();
    this.taskPriorities = this.taskPrioritiesService.getTaskPriorities();
    this.taskStatuses = this.taskStatusesService.getAllTaskStatuses();
    this.editTaskForm.submitted = false;
    this.routeParamsSubscription = this.activatedRoute.params.subscribe({
      next: params => {
        this.taskID = params["taskid"];
        this.tasksService.getTaskByTaskID(this.taskID).subscribe({
          next: response => {
            if (response != null) {
              this.currentTask = response;
              this.editTaskForm.patchValue({
                taskID: this.currentTask.taskID,
                taskTitle: this.currentTask.taskTitle,
                description: this.currentTask.description,
                projectID: this.currentTask.projectID,
                assignedTo: this.currentTask.assignedTo,
                taskPriorityID: this.currentTask.taskPriorityID,
                currentTaskStatusID: this.currentTask.currentTaskStatusID
              });
            }
          }
        });
      }
    });
  }

  onSubmitTaskEdit() {
    this.editTaskForm.submitted = true;

    if (this.editTaskForm.valid) {
      this.tasksService.updateTask(this.taskID, this.editTaskForm.value).subscribe({
        next: response => {
          this.router.navigate(['/employee', 'tasks']);
          this.editTaskForm.reset({
            taskTitle: null,
            description: null,
            projectID: null,
            assignedTo: null,
            taskPriorityID: null,
            currentTaskStatusID: null
          });
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }

}

EditTaskComponent.ɵfac = function EditTaskComponent_Factory(t) {
  return new (t || EditTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_1__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_2__.EmployeesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_3__.TaskPrioritiesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_5__.TaskStatusesService));
};

EditTaskComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: EditTaskComponent,
  selectors: [["app-edit-task"]],
  decls: 64,
  vars: 40,
  consts: [["novalidate", "novalidate", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "taskTitle", 1, "text-info", 2, "font-size", "18px"], ["type", "text", "id", "taskTitle", "placeholder", "Task Title", "formControlName", "taskTitle", "autofocus", "autofocus", 1, "form-control", 2, "font-size", "20px", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "description", 1, "text-info"], ["id", "description", "placeholder", "Description", "formControlName", "description", 1, "form-control"], [1, "col-lg-6"], [1, "form-group", "form-row"], ["for", "projectID", 1, "text-info", "col-md-3", "col-form-label"], [1, "col-md-9"], ["id", "projectID", "formControlName", "projectID", 1, "form-control", 3, "ngClass"], ["value", "null", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "assignedTo", 1, "text-info", "col-md-3", "col-form-label"], ["id", "assignedTo", "formControlName", "assignedTo", 1, "form-control", 3, "ngClass"], ["for", "taskPriorityID", 1, "text-info", "col-md-3", "col-form-label"], ["id", "taskPriorityID", "formControlName", "taskPriorityID", 1, "form-control", 3, "ngClass"], ["for", "currentTaskStatusID", 1, "text-info", "col-md-3", "col-form-label"], ["id", "currentTaskStatusID", "formControlName", "currentTaskStatusID", 1, "form-control", 3, "ngClass"], [1, "col-lg-12", "border-top", "text-center"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", "mt-2"], [1, "btn", "btn-info", "text-white", "btn-sm", "mt-1", 3, "routerLink"], [1, "text-danger"], [3, "value"]],
  template: function EditTaskComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Edit Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function EditTaskComponent_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmitTaskEdit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Task Title:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EditTaskComponent_div_9_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Description:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "textarea", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Project:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, EditTaskComponent_option_24_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, EditTaskComponent_div_26_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Assigned To:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, EditTaskComponent_option_34_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](35, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, EditTaskComponent_div_36_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Priority:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, EditTaskComponent_option_45_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, EditTaskComponent_span_47_Template, 2, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Status:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, EditTaskComponent_option_55_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](56, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, EditTaskComponent_span_57_Template, 2, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Edit Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Back to Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_14_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.editTaskForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](24, _c0, ((tmp_1_0 = ctx.editTaskForm.get("taskTitle")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.editTaskForm.get("taskTitle")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.editTaskForm.get("taskTitle")) == null ? null : tmp_1_0.touched) || ctx.editTaskForm.submitted), ((tmp_1_0 = ctx.editTaskForm.get("taskTitle")) == null ? null : tmp_1_0.valid) && (((tmp_1_0 = ctx.editTaskForm.get("taskTitle")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.editTaskForm.get("taskTitle")) == null ? null : tmp_1_0.touched) || ctx.editTaskForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.editTaskForm.get("taskTitle")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.editTaskForm.get("taskTitle")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.editTaskForm.get("taskTitle")) == null ? null : tmp_2_0.touched) || ctx.editTaskForm.submitted) && ((tmp_2_0 = ctx.editTaskForm.get("taskTitle")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](27, _c0, ((tmp_3_0 = ctx.editTaskForm.get("projectID")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.editTaskForm.get("projectID")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.editTaskForm.get("projectID")) == null ? null : tmp_3_0.touched) || ctx.editTaskForm.submitted), ((tmp_3_0 = ctx.editTaskForm.get("projectID")) == null ? null : tmp_3_0.valid) && (((tmp_3_0 = ctx.editTaskForm.get("projectID")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.editTaskForm.get("projectID")) == null ? null : tmp_3_0.touched) || ctx.editTaskForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 16, ctx.projects));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.editTaskForm.get("projectID")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.editTaskForm.get("projectID")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.editTaskForm.get("projectID")) == null ? null : tmp_5_0.touched) || ctx.editTaskForm.submitted) && ((tmp_5_0 = ctx.editTaskForm.get("projectID")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](30, _c0, ((tmp_6_0 = ctx.editTaskForm.get("assignedTo")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.editTaskForm.get("assignedTo")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.editTaskForm.get("assignedTo")) == null ? null : tmp_6_0.touched) || ctx.editTaskForm.submitted), ((tmp_6_0 = ctx.editTaskForm.get("assignedTo")) == null ? null : tmp_6_0.valid) && (((tmp_6_0 = ctx.editTaskForm.get("assignedTo")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.editTaskForm.get("assignedTo")) == null ? null : tmp_6_0.touched) || ctx.editTaskForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](35, 18, ctx.employees));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.editTaskForm.get("assignedTo")) == null ? null : tmp_8_0.invalid) && (((tmp_8_0 = ctx.editTaskForm.get("assignedTo")) == null ? null : tmp_8_0.dirty) || ((tmp_8_0 = ctx.editTaskForm.get("assignedTo")) == null ? null : tmp_8_0.touched) || ctx.editTaskForm.submitted) && ((tmp_8_0 = ctx.editTaskForm.get("assignedTo")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](33, _c0, ((tmp_9_0 = ctx.editTaskForm.get("taskPriorityID")) == null ? null : tmp_9_0.invalid) && (((tmp_9_0 = ctx.editTaskForm.get("taskPriorityID")) == null ? null : tmp_9_0.dirty) || ((tmp_9_0 = ctx.editTaskForm.get("taskPriorityID")) == null ? null : tmp_9_0.touched) || ctx.editTaskForm.submitted), ((tmp_9_0 = ctx.editTaskForm.get("taskPriorityID")) == null ? null : tmp_9_0.valid) && (((tmp_9_0 = ctx.editTaskForm.get("taskPriorityID")) == null ? null : tmp_9_0.dirty) || ((tmp_9_0 = ctx.editTaskForm.get("taskPriorityID")) == null ? null : tmp_9_0.touched) || ctx.editTaskForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 20, ctx.taskPriorities));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.editTaskForm.get("taskPriorityID")) == null ? null : tmp_11_0.invalid) && (((tmp_11_0 = ctx.editTaskForm.get("taskPriorityID")) == null ? null : tmp_11_0.dirty) || ((tmp_11_0 = ctx.editTaskForm.get("taskPriorityID")) == null ? null : tmp_11_0.touched) || ctx.editTaskForm.submitted) && ((tmp_11_0 = ctx.editTaskForm.get("taskPriorityID")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](36, _c0, ((tmp_12_0 = ctx.editTaskForm.get("currentTaskStatusID")) == null ? null : tmp_12_0.invalid) && (((tmp_12_0 = ctx.editTaskForm.get("currentTaskStatusID")) == null ? null : tmp_12_0.dirty) || ((tmp_12_0 = ctx.editTaskForm.get("currentTaskStatusID")) == null ? null : tmp_12_0.touched) || ctx.editTaskForm.submitted), ((tmp_12_0 = ctx.editTaskForm.get("currentTaskStatusID")) == null ? null : tmp_12_0.valid) && (((tmp_12_0 = ctx.editTaskForm.get("currentTaskStatusID")) == null ? null : tmp_12_0.dirty) || ((tmp_12_0 = ctx.editTaskForm.get("currentTaskStatusID")) == null ? null : tmp_12_0.touched) || ctx.editTaskForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](56, 22, ctx.taskStatuses));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.editTaskForm.get("currentTaskStatusID")) == null ? null : tmp_14_0.invalid) && (((tmp_14_0 = ctx.editTaskForm.get("currentTaskStatusID")) == null ? null : tmp_14_0.dirty) || ((tmp_14_0 = ctx.editTaskForm.get("currentTaskStatusID")) == null ? null : tmp_14_0.touched) || ctx.editTaskForm.submitted) && ((tmp_14_0 = ctx.editTaskForm.get("currentTaskStatusID")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](39, _c1));
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXRhc2suY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 2409:
/*!**************************************************************!*\
  !*** ./src/app/employee/components/tasks/tasks.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksComponent": () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/tasks.service */ 2632);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





function TasksComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksComponent_div_7_div_10_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const taskStatusDetail_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 5, taskStatusDetail_r8 == null ? null : taskStatusDetail_r8.statusUpdationDateTime, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r6.getTaskStatusTextCssClass(taskStatusDetail_r8 == null ? null : taskStatusDetail_r8.taskStatus == null ? null : taskStatusDetail_r8.taskStatus.taskStatusName));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", taskStatusDetail_r8 == null ? null : taskStatusDetail_r8.taskStatus == null ? null : taskStatusDetail_r8.taskStatus.taskStatusName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", taskStatusDetail_r8 == null ? null : taskStatusDetail_r8.user == null ? null : taskStatusDetail_r8.user.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", taskStatusDetail_r8 == null ? null : taskStatusDetail_r8.description, " ");
} }
const _c0 = function (a2) { return ["/employee", "edittask", a2]; };
function TasksComponent_div_7_div_10_a_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, task_r4.taskID));
} }
const _c1 = function (a2) { return ["/employee", "updatetaskstatus", a2]; };
function TasksComponent_div_7_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Created:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Assigned to:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Project:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, TasksComponent_div_7_div_10_tr_44_Template, 12, 8, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Change Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, TasksComponent_div_7_div_10_a_50_Template, 3, 3, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_10_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("#", i_r5 + 1, " \u00A0\u00A0 ", task_r4.taskTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.getTaskPriorityBgCssClass(task_r4.taskPriority == null ? null : task_r4.taskPriority.taskPriorityName));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r4.taskPriority == null ? null : task_r4.taskPriority.taskPriorityName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r4.createdByUser == null ? null : task_r4.createdByUser.userName, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](20, 13, task_r4.createdOn, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r4.assignedToUser == null ? null : task_r4.assignedToUser.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", task_r4.project == null ? null : task_r4.project.projectName, " - ", task_r4.project == null ? null : task_r4.project.clientLocation == null ? null : task_r4.project.clientLocation.clientLocationName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", task_r4.taskStatusDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c1, task_r4.taskID));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (task_r4.createdByUser == null ? null : task_r4.createdByUser.userName) == ((tmp_10_0 = ctx_r3.loginService.getCurrentUser()) == null ? null : tmp_10_0.userName));
} }
function TasksComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TasksComponent_div_7_div_10_Template, 51, 18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const taskGroup_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.setTaskGroupBgCssClass(taskGroup_r2.taskStatusName));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](taskGroup_r2.taskStatusName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", taskGroup_r2.tasks.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", taskGroup_r2.tasks);
} }
const _c2 = function () { return ["/employee", "createtask"]; };
class TasksComponent {
    constructor(tasksService, loginService) {
        this.tasksService = tasksService;
        this.loginService = loginService;
        this.showLoading = true;
    }
    ngOnInit() {
        this.tasksService.getAllTasks().subscribe({
            next: (response) => {
                this.taskGroups = response;
                this.showLoading = false;
            },
            error: (error) => {
                console.log(error);
            }
        });
    }
    /* set background color of Taskgroup based on task status */
    setTaskGroupBgCssClass(taskStatusName) {
        switch (taskStatusName) {
            case "Holding":
                return "bg-secondary text-white";
            case "Prioritized":
                return "bg-primary text-white";
            case "Started":
                return "bg-info text-white";
            case "Finished":
                return "bg-success text-white";
            case "Reverted":
                return "bg-danger text-white";
            default:
                return "";
        }
    }
    /* Set background color of task priority */
    getTaskPriorityBgCssClass(taskPriorityName) {
        switch (taskPriorityName) {
            case "Urgent":
                return "bg-danger";
            case "Normal":
                return "bg-primary";
            case "Bellow Normal":
                return "bg-info";
            case "Low":
                return "bg-secondary";
            default:
                return "";
        }
    }
    /* Set background color of task priority */
    getTaskStatusTextCssClass(taskStatusName) {
        switch (taskStatusName) {
            case "Holding":
                return "text-secondary";
            case "Prioritized":
                return "text-primary";
            case "Started":
                return "text-info";
            case "Finished":
                return "text-success";
            case "Reverted":
                return "text-danger";
            default:
                return "";
        }
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_0__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService)); };
TasksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], decls: 8, vars: 4, consts: [[1, "d-flex", "align-items-center"], [1, "me-3"], ["class", "spinner-border text-primary", "role", "status", 4, "ngIf"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "row", "mt-1", "mb-2"], ["class", "col-lg-6 mb-1", 4, "ngFor", "ngForOf"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col-lg-6", "mb-1"], [1, "card", "card-primary"], [1, "card-header", 3, "ngClass"], [1, "card-title"], [1, "d-flex", "justify-content-between"], [1, "badge", "bg-warning", "text-dark"], [1, "card-body"], ["class", "card mb-1", 4, "ngFor", "ngForOf"], [1, "card", "mb-1"], [1, "card-header", "d-flex", "justify-content-between"], [1, "fw-bold"], [1, "badge", "me-1", 2, "font-size", "15px", 3, "ngClass"], [1, "table", "table-borderless"], [1, "fa", "fa-user"], [1, "fa", "fa-calendar"], [1, "fa", "fa-briefcase"], [1, "table", "table-bordered"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-secondary", "me-2", 3, "routerLink"], [1, "fa", "fa-pencil"], ["class", "btn btn-sm btn-outline-secondary", 3, "routerLink", 4, "ngIf"], [3, "ngClass"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "routerLink"], [1, "fa", "fa-pencil-square-o"]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TasksComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Create Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TasksComponent_div_7_Template, 11, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.taskGroups);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5986:
/*!****************************************************************************************!*\
  !*** ./src/app/employee/components/update-task-status/update-task-status.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateTaskStatusComponent": () => (/* binding */ UpdateTaskStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_models_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/task */ 8872);
/* harmony import */ var src_app_models_task_status_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/task-status-detail */ 4238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tasks.service */ 2632);
/* harmony import */ var src_app_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/task-statuses.service */ 5441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);










function UpdateTaskStatusComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const taskStatus_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", taskStatus_r2.taskStatusID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", taskStatus_r2.taskStatusName, " ");
  }
}

function UpdateTaskStatusComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select current task status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};

const _c1 = function () {
  return ["/employee", "tasks"];
};

class UpdateTaskStatusComponent {
  // Constructor
  // activatedRoute represents the current route
  constructor(activatedRoute, tasksService, formBuilder, taskStatusesService, router) {
    this.activatedRoute = activatedRoute;
    this.tasksService = tasksService;
    this.formBuilder = formBuilder;
    this.taskStatusesService = taskStatusesService;
    this.router = router;
    this.currentTask = new src_app_models_task__WEBPACK_IMPORTED_MODULE_0__.Task();
    this.currentTaskStatusDetail = new src_app_models_task_status_detail__WEBPACK_IMPORTED_MODULE_1__.TaskStatusDetail();
  } // Methods


  ngOnInit() {
    this.taskStatuses = this.taskStatusesService.getAllTaskStatuses();
    this.editTaskStatusForm = this.formBuilder.group({
      taskID: null,
      description: null,
      taskStatusID: [null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }]
    });
    this.editTaskStatusForm.submitted = false;
    this.routeParamsSubscription = this.activatedRoute.params.subscribe({
      next: params => {
        this.taskID = params["taskid"];
        this.tasksService.getTaskByTaskID(this.taskID).subscribe({
          next: response => {
            if (response != null) {
              this.currentTask = response;
              this.editTaskStatusForm.patchValue({
                taskID: this.taskID,
                description: null,
                taskStatusID: this.currentTask.currentTaskStatusID
              });
            }
          }
        });
      }
    });
  }

  onSubmitTaskUpdate() {
    this.editTaskStatusForm.submitted = true;

    if (this.editTaskStatusForm.valid) {
      this.tasksService.updateTaskStatus(this.taskID, this.editTaskStatusForm.value).subscribe({
        next: response => {
          this.router.navigate(['/employee', 'tasks']);
          this.editTaskStatusForm.reset({
            taskID: null,
            description: null,
            taskStatusID: null
          });
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }

}

UpdateTaskStatusComponent.ɵfac = function UpdateTaskStatusComponent_Factory(t) {
  return new (t || UpdateTaskStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_3__.TaskStatusesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};

UpdateTaskStatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: UpdateTaskStatusComponent,
  selectors: [["app-update-task-status"]],
  decls: 44,
  vars: 20,
  consts: [["novalidate", "novalidate", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-12"], [1, "table", "table-sm", "table-borderless"], [2, "width", "65px"], [1, "fa", "fa-user"], [1, "fa", "fa-calendar"], [1, "text-right"], [1, "fa", "fa-calendar-check"], [1, "col-lg-12"], [1, "form-group"], ["for", "description", 1, "text-info"], ["id", "description", "placeholder", "Description", "formControlName", "description", 1, "form-control"], [1, "col-lg-6"], [1, "form-group", "form-row"], ["for", "taskStatusID", 1, "text-info", "col-md-3", "col-form-label"], [1, "col-md-9"], ["id", "taskStatusID", "formControlName", "taskStatusID", 1, "form-control", 3, "ngClass"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [1, "col-lg-12", "border-top", "text-center"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", "mt-2"], [1, "btn", "btn-info", "text-white", "btn-sm", "mt-1", 3, "routerLink"], [3, "value"], [1, "text-danger"]],
  template: function UpdateTaskStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Update Task Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function UpdateTaskStatusComponent_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmitTaskUpdate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Created:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Last Updated on:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Description:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "textarea", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Status:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, UpdateTaskStatusComponent_option_34_Template, 2, 2, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, UpdateTaskStatusComponent_div_36_Template, 2, 0, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Update Task Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Back to Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      let tmp_4_0;
      let tmp_6_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editTaskStatusForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.currentTask.createdByUser == null ? null : ctx.currentTask.createdByUser.userName, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](14, 8, ctx.currentTask.createdOn, "dd/MM/yyyy"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](20, 11, ctx.currentTask.lastUpdatedOn, "dd/MM/yyyy"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](16, _c0, ((tmp_4_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_4_0.touched) || ctx.editTaskStatusForm.submitted), ((tmp_4_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_4_0.valid) && (((tmp_4_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_4_0.touched) || ctx.editTaskStatusForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](35, 14, ctx.taskStatuses));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_6_0.touched) || ctx.editTaskStatusForm.submitted) && ((tmp_6_0 = ctx.editTaskStatusForm.get("taskStatusID")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](19, _c1));
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtdGFzay1zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 3490:
/*!**********************************************************************!*\
  !*** ./src/app/employee/employee-routing/employee-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeRoutingModule": () => (/* binding */ EmployeeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../guards/can-activate-guard.service */ 3018);
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/tasks/tasks.component */ 2409);
/* harmony import */ var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/create-task/create-task.component */ 2073);
/* harmony import */ var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/edit-task/edit-task.component */ 2948);
/* harmony import */ var _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/update-task-status/update-task-status.component */ 5986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    {
        path: '', canActivate: [_guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_0__.CanActivateGuardService], data: { expectedRoles: ["Employee"] }, children: [
            { path: 'tasks', component: _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__.TasksComponent, data: { linkIndex: 1 } },
            { path: 'createtask', component: _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_2__.CreateTaskComponent, data: { linkIndex: 2 } },
            { path: 'edittask/:taskid', component: _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_3__.EditTaskComponent, data: { linkIndex: 3 } },
            { path: 'updatetaskstatus/:taskid', component: _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_4__.UpdateTaskStatusComponent, data: { linkIndex: 4 } }, // employee/updatetaskstatus/:taskid
        ]
    }
];
class EmployeeRoutingModule {
}
EmployeeRoutingModule.ɵfac = function EmployeeRoutingModule_Factory(t) { return new (t || EmployeeRoutingModule)(); };
EmployeeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: EmployeeRoutingModule });
EmployeeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 4375:
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeModule": () => (/* binding */ EmployeeModule)
/* harmony export */ });
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tasks/tasks.component */ 2409);
/* harmony import */ var _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-routing/employee-routing.module */ 3490);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-task/create-task.component */ 2073);
/* harmony import */ var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-task/edit-task.component */ 2948);
/* harmony import */ var _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/update-task-status/update-task-status.component */ 5986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);







class EmployeeModule {
}
EmployeeModule.ɵfac = function EmployeeModule_Factory(t) { return new (t || EmployeeModule)(); };
EmployeeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: EmployeeModule });
EmployeeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmployeeRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](EmployeeModule, { declarations: [_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__.TasksComponent,
        _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__.CreateTaskComponent,
        _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__.EditTaskComponent,
        _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_5__.UpdateTaskStatusComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmployeeRoutingModule], exports: [_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__.TasksComponent,
        _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__.CreateTaskComponent,
        _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__.EditTaskComponent,
        _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_5__.UpdateTaskStatusComponent] }); })();


/***/ }),

/***/ 4238:
/*!**********************************************!*\
  !*** ./src/app/models/task-status-detail.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskStatusDetail": () => (/* binding */ TaskStatusDetail)
/* harmony export */ });
class TaskStatusDetail {
    // Constructor
    constructor() {
        this.taskStatusDetailID = null;
        this.taskID = null;
        this.taskStatusID = null;
        this.taskStatus = null;
        this.userID = null;
        this.user = null;
        this.description = null;
        this.statusUpdationDateTime = null;
    }
}


/***/ }),

/***/ 8872:
/*!********************************!*\
  !*** ./src/app/models/task.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    // Constructor
    constructor() {
        this.taskID = null;
        this.taskTitle = null;
        this.description = null;
        this.createdOn = null;
        this.lastUpdatedOn = null;
        this.projectID = null;
        this.project = null;
        this.createdBy = null;
        this.createdByUser = null;
        this.assignedTo = null;
        this.assignedToUser = null;
        this.taskPriorityID = null;
        this.taskPriority = null;
        this.currentStatus = null;
        this.currentTaskStatusID = null;
        this.taskStatusDetails = null;
    }
}


/***/ }),

/***/ 4640:
/*!***********************************************!*\
  !*** ./src/app/services/employees.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeesService": () => (/* binding */ EmployeesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class EmployeesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllEmployees() {
        var _a;
        return (_a = this.httpClient) === null || _a === void 0 ? void 0 : _a.get("api/Account/getallemployees", { responseType: 'json' });
    }
}
EmployeesService.ɵfac = function EmployeesService_Factory(t) { return new (t || EmployeesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
EmployeesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeesService, factory: EmployeesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2632:
/*!*******************************************!*\
  !*** ./src/app/services/tasks.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksService": () => (/* binding */ TasksService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class TasksService {
    // Constructor
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // Methods
    getAllTasks() {
        return this.httpClient.get("api/Tasks", { responseType: 'json' });
    }
    insertTask(newTask) {
        return this.httpClient.post("api/Tasks", newTask, { responseType: 'json' });
    }
    getTaskByTaskID(taskID) {
        return this.httpClient.get(`api/Tasks/${taskID}`, { responseType: 'json' });
    }
    updateTaskStatus(taskID, taskStatusDetail) {
        return this.httpClient.put(`api/Tasks/updateTaskStatus/${taskID}`, taskStatusDetail, { responseType: 'json' });
    }
    updateTask(taskID, task) {
        return this.httpClient.put(`api/Tasks/updateTask/${taskID}`, task, { responseType: 'json' });
    }
}
TasksService.ɵfac = function TasksService_Factory(t) { return new (t || TasksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
TasksService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TasksService, factory: TasksService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_employee_employee_module_ts.js.map