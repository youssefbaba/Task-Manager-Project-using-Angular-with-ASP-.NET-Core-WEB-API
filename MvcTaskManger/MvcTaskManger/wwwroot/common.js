"use strict";
(self["webpackChunkTaskManager"] = self["webpackChunkTaskManager"] || []).push([["common"],{

/***/ 162:
/*!*****************************************************!*\
  !*** ./src/app/services/task-priorities.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskPrioritiesService": () => (/* binding */ TaskPrioritiesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class TaskPrioritiesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getTaskPriorities() {
        return this.httpClient.get('api/TaskPriorities', { responseType: 'json' });
    }
    insertTaskPriority(newTaskPriority) {
        return this.httpClient.post('api/TaskPriorities', newTaskPriority, { responseType: 'json' });
    }
    updateTaskPriority(taskPriorityID, existingTaskPriority) {
        return this.httpClient.put(`api/TaskPriorities/${taskPriorityID}`, existingTaskPriority, { responseType: 'json' });
    }
    deleteTaskPriority(taskPriorityID) {
        return this.httpClient.delete(`api/TaskPriorities/${taskPriorityID}`);
    }
}
TaskPrioritiesService.ɵfac = function TaskPrioritiesService_Factory(t) { return new (t || TaskPrioritiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
TaskPrioritiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskPrioritiesService, factory: TaskPrioritiesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5441:
/*!***************************************************!*\
  !*** ./src/app/services/task-statuses.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskStatusesService": () => (/* binding */ TaskStatusesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class TaskStatusesService {
    // Constructor
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // Methods
    getAllTaskStatuses() {
        return this.httpClient.get("api/TaskStatuses", { responseType: 'json' });
    }
    insertTaskStatus(newTaskStatus) {
        return this.httpClient.post("api/TaskStatuses", newTaskStatus, { responseType: 'json' });
    }
    updateTaskStatus(taskStatusID, existingTaskStatus) {
        return this.httpClient.put(`api/TaskStatuses/${taskStatusID}`, existingTaskStatus, { responseType: 'json' });
    }
    deleteTaskStatus(taskStatusID) {
        return this.httpClient.delete(`api/TaskStatuses/${taskStatusID}`);
    }
}
TaskStatusesService.ɵfac = function TaskStatusesService_Factory(t) { return new (t || TaskStatusesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
TaskStatusesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskStatusesService, factory: TaskStatusesService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map