import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskStatus } from '../models/task-status';

@Injectable({
  providedIn: 'root'
})
export class TaskStatusesService {

  // Constructor
  constructor(private httpClient : HttpClient) { }

  // Methods
  getAllTaskStatuses(): Observable<TaskStatus[]>{
    return this.httpClient.get<TaskStatus[]>("api/TaskStatuses", {responseType:'json'});
  }

  insertTaskStatus(newTaskStatus : TaskStatus): Observable<TaskStatus>{
    return this.httpClient.post<TaskStatus>("api/TaskStatuses", newTaskStatus, {responseType:'json'});
  }

  updateTaskStatus(taskStatusID : number, existingTaskStatus : TaskStatus): Observable<TaskStatus>{
    return this.httpClient.put<TaskStatus>(`api/TaskStatuses/${taskStatusID}`, existingTaskStatus, {responseType:'json'});
  }

  deleteTaskStatus(taskStatusID : number): Observable<void>{
    return this.httpClient.delete<void>(`api/TaskStatuses/${taskStatusID}`);
  }
}
