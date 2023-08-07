import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class DashboardService {
    getTeamMembersSummary(): any[] {
        return [
            {
                region: 'East',
                teamMembersCount: 20,
                temporarilyUnavailableMembers: 4,
            },
            {
                region: 'West',
                teamMembersCount: 15,
                temporarilyUnavailableMembers: 8,
            },
            {
                region: 'South',
                teamMembersCount: 17,
                temporarilyUnavailableMembers: 1,
            },
            {
                region: 'North',
                teamMembersCount: 15,
                temporarilyUnavailableMembers: 6,
            },
        ];
    }

    getTeamMembers(): any[] {
        return [
            {
                region: 'East',
                members: [
                    { id: 1, name: 'Ford', status: 'Available' },
                    { id: 2, name: 'Miller', status: 'Available' },
                    { id: 3, name: 'Jones', status: 'Busy' },
                    { id: 4, name: 'James', status: 'Busy' },
                ],
            },
            {
                region: 'West',
                members: [
                    { id: 5, name: 'Anna', status: 'Available' },
                    { id: 6, name: 'Arun', status: 'Available' },
                    { id: 7, name: 'Varun', status: 'Busy' },
                    { id: 8, name: 'Jasmine', status: 'Busy' },
                ],
            },
            {
                region: 'South',
                members: [
                    { id: 9, name: 'Krishna', status: 'Available' },
                    { id: 10, name: 'Mohan', status: 'Available' },
                    { id: 11, name: 'Raju', status: 'Busy' },
                    { id: 12, name: 'Farooq', status: 'Busy' },
                ],
            },
            {
                region: 'North',
                members: [
                    { id: 13, name: 'Jacob', status: 'Available' },
                    { id: 14, name: 'Smith', status: 'Available' },
                    { id: 15, name: 'Jones', status: 'Busy' },
                    { id: 16, name: 'James', status: 'Busy' },
                ],
            },
        ];
    }
}
