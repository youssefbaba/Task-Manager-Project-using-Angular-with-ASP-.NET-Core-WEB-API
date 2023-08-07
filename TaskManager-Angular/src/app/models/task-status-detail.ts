import { TaskStatus } from "./task-status";

export class TaskStatusDetail {

    //Properties
    taskStatusDetailID : number | any;
    taskID : number | any;
    taskStatusID : number | any;
    taskStatus : TaskStatus |any;
    userID : string | any;
    user : any;
    description : string | any;
    statusUpdationDateTime : Date | any;

    // Constructor
    constructor() {
        this.taskStatusDetailID =  null;
        this.taskID =  null;
        this.taskStatusID =  null;
        this.taskStatus =  null;
        this.userID =  null;
        this.user =  null;
        this.description =  null;
        this.statusUpdationDateTime =  null;
    }
}
