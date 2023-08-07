import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    designation: string = "";
    username: string = "";
    numberOfTeamMembers: number = 0;
    totalCostOfAllProjects: number = 0;
    pendingTasks: number = 0;
    upComingProjects: number = 0;
    projectCost: number = 0;
    currentExpenditure: number = 0;
    availableFunds: number = 0;
    toDay: Date = new Date();

    clients: string[] = [];
    projects: string[] = [];
    years: number[] = [];
    teamMembersSummary: any = [];
    teamMembers: any = [];

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.designation = 'Team Leader';
        this.username = 'Scott Smith';
        this.numberOfTeamMembers = 67;
        this.totalCostOfAllProjects = 240;
        this.pendingTasks = 15;
        this.upComingProjects = 0.2;
        this.projectCost = 2113507;
        this.currentExpenditure = 96788;
        this.availableFunds = 52536;
        this.toDay = new Date();

        this.clients = [
            'ABC Infotech Ltd.',
            'DEF Software Solutions',
            'GHI Industries',
        ];

        this.projects = ['Project A', 'Project B', 'Project C', 'Project D'];

        for (var i = 2020; i >= 2010; i--) {
            this.years.push(i);
        }

        this.teamMembersSummary = this.dashboardService.getTeamMembersSummary();

        this.teamMembers = this.dashboardService.getTeamMembers();
        
    }

    onProjectChange($event: any) {
        if ($event.target.innerHTML.trim() == 'Project A') {
            this.projectCost = 2113507;
            this.currentExpenditure = 96788;
            this.availableFunds = 52436;
        } else if ($event.target.innerHTML.trim() == 'Project B') {
            this.projectCost = 88923;
            this.currentExpenditure = 22450;
            this.availableFunds = 2640;
        } else if ($event.target.innerHTML.trim() == 'Project C') {
            this.projectCost = 662183;
            this.currentExpenditure = 7721;
            this.availableFunds = 9811;
        } else if ($event.target.innerHTML.trim() == 'Project D') {
            this.projectCost = 928431;
            this.currentExpenditure = 562;
            this.availableFunds = 883;
        }
    }
}
