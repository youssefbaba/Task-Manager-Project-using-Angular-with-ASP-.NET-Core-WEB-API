import { Project } from "./project";
import { TaskPriority } from "./task-priority";

export class Task {

    // Properties
    taskID: number | any;
    taskTitle: string | any;
    description: string | any;
    createdOn: Date | any;
    lastUpdatedOn: Date | any;
    projectID: number | any;
    project: Project | any;
    createdBy: string | any;
    createdByUser: any;
    assignedTo: string | any;
    assignedToUser: any;
    taskPriorityID: number | any;
    taskPriority: TaskPriority | any;
    currentStatus: string | any;
    currentTaskStatusID: number | any;
    taskStatusDetails: any[] | any;

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
