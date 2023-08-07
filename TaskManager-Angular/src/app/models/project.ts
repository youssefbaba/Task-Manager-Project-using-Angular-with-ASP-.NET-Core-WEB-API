import { ClientLocation } from "./client-location";

//  module class to represent the structure of Project table
export class Project {

    // Properties
    projectID: number | any;
    //id: any;  // Only for json-server
    projectName: string | any;
    dateOfStart: string | any;
    teamSize: number | any;
    active: boolean | any;
    status: string | any;
    clientLocationID: number | any;
    clientLocation: ClientLocation | any;

    constructor() {
        this.projectID = null;
        //this.id = 0;   // Only for json-server
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = null;
        this.active = false;
        this.status = null;
        this.clientLocationID = null;
        this.clientLocation = null;
    }

}
