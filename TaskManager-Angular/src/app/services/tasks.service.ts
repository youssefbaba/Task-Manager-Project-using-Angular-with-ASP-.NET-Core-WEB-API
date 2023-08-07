import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from "./../models/task";
import { HttpClient } from '@angular/common/http';
import { GroupedTask } from '../models/grouped-task';
import { TaskStatusDetail } from '../models/task-status-detail';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // Constructor
  constructor(private httpClient: HttpClient) { }

  // Methods
  getAllTasks(): Observable<GroupedTask[]> {
    return this.httpClient.get<GroupedTask[]>("api/Tasks", { responseType: 'json' });
  }

  insertTask(newTask: Task): Observable<Task> {
    return this.httpClient.post<Task>("api/Tasks", newTask, { responseType: 'json' });
  }

  getTaskByTaskID(taskID: number): Observable<Task> {
    return this.httpClient.get<Task>(`api/Tasks/${taskID}`, { responseType: 'json' })
  }

  updateTaskStatus(taskID: number, taskStatusDetail : TaskStatusDetail): Observable<TaskStatusDetail>{
    return this.httpClient.put<TaskStatusDetail>(`api/Tasks/updateTaskStatus/${taskID}`, taskStatusDetail ,{ responseType: 'json' })
  }

  updateTask(taskID: number, task : Task): Observable<Task>{
    return this.httpClient.put<Task>(`api/Tasks/updateTask/${taskID}`, task ,{ responseType: 'json' })
  }

}
