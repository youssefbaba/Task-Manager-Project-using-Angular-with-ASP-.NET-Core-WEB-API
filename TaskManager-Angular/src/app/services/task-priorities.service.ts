import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskPriority } from '../models/task-priority';

@Injectable({
  providedIn: 'root'
})
export class TaskPrioritiesService {

  constructor(private httpClient: HttpClient) { }

  getTaskPriorities(): Observable<TaskPriority[]> {
    return this.httpClient.get<TaskPriority[]>('api/TaskPriorities', { responseType: 'json' });
  }

  insertTaskPriority(newTaskPriority : TaskPriority): Observable<TaskPriority> {
    return this.httpClient.post<TaskPriority>('api/TaskPriorities', newTaskPriority, { responseType: 'json' });
  }

  updateTaskPriority(taskPriorityID : number , existingTaskPriority : TaskPriority): Observable<TaskPriority> {
    return this.httpClient.put<TaskPriority>(`api/TaskPriorities/${taskPriorityID}`, existingTaskPriority, { responseType: 'json' });
  }

  deleteTaskPriority(taskPriorityID : number): Observable<void> {
    return this.httpClient.delete<void>(`api/TaskPriorities/${taskPriorityID}`);
  }
}
