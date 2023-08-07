import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Project } from '../models/project';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'  // this service available globaly for the entire project
})
export class ProjectsService {

  //private jsonServerUrl = "http://localhost:3000/projects";

  public myBehaviorSubject: BehaviorSubject<boolean>;

  constructor(private httpClient: HttpClient,
    private datePipe: DatePipe) {
    
      this.myBehaviorSubject = new BehaviorSubject<boolean>(false);  // false = current value stored in it 
  }

  toggleDetails() {

    // this.hideDetails = !this.hideDetails;

    this.myBehaviorSubject.next(!this.myBehaviorSubject.value);    // Pass notification to all subscribers at-a-time without skip any one
  }

  /*
 
    // Json-server package:
    getAllProjects(): Observable<Project[]> {
      return this.httpClient.get<Project[]>(this.jsonServerUrl, { responseType: 'json' })
        .pipe(map(
          (dataResponse: Project[]) => {
            for (let i = 0; i < dataResponse.length; i++) {
              dataResponse[i].dateOfStart = this.datePipe.transform(dataResponse[i].dateOfStart, "yyyy-MM-dd");
            }
            return dataResponse;
          }
        ));
    }
  
    insertProject(newProject: Project): Observable<Project> {
      return this.httpClient.post<Project>(this.jsonServerUrl, newProject, { responseType: 'json' })
        .pipe(map(
          (dataResponse: Project) => {
            dataResponse.dateOfStart = this.datePipe.transform(dataResponse.dateOfStart, "yyyy-MM-dd");
            return dataResponse;
          }
        ));
    }
  
    getProjectByProjectID(id: number): Observable<Project> {
      return this.httpClient.get<Project>(`${this.jsonServerUrl}/${id}`, { responseType: 'json' })
        .pipe(map(
          (dataResponse: Project) => {
            dataResponse.dateOfStart = this.datePipe.transform(dataResponse.dateOfStart, "yyyy-MM-dd");
            return dataResponse;
          }
        ));
    }
  
    updateProject(id: number, existingProject: Project): Observable<Project> {
      return this.httpClient.put<Project>(`${this.jsonServerUrl}/${id}`, existingProject, { responseType: 'json' })
      .pipe(map(
        (dataResponse: Project) => {
          dataResponse.dateOfStart = this.datePipe.transform(dataResponse.dateOfStart, "yyyy-MM-dd");
          return dataResponse;
        }
      ));
    }
  
    deleteProject(id: number): Observable<void> {
      return this.httpClient.delete<void>(`${this.jsonServerUrl}/${id}`);
    }
  
    searchProjects(searchBy: string, searchText: string): Observable<Project[]> {
      return this.httpClient.get<Project[]>(`${this.jsonServerUrl}?${searchBy}=${searchText}`, { responseType: 'json' })
        .pipe(map(
          (dataResponse: Project[]) => {
            for (let i = 0; i < dataResponse.length; i++) {
              dataResponse[i].dateOfStart = this.datePipe.transform(dataResponse[i].dateOfStart, "yyyy-MM-dd");
            }
            return dataResponse;
          }
        ));
    }
 
  */

  // Asp .Net Core Web API
  getAllProjects(): Observable<Project[]> {

    //debugger; // adding another debugger as breakpoint here.
    return this.httpClient.get<Project[]>('api/projects', { responseType: 'json' })
      .pipe(map(
        (dataResponse: Project[]) => {
          for (let i = 0; i < dataResponse.length; i++) {
            dataResponse[i].dateOfStart = this.datePipe.transform(dataResponse[i].dateOfStart, "yyyy-MM-dd");
          }
          //debugger; // adding another debugger as breakpoint here.
          return dataResponse;
        }
      ));
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>('api/projects', newProject, { responseType: 'json' })
      .pipe(map(
        (dataResponse: Project) => {
          dataResponse.dateOfStart = this.datePipe.transform(dataResponse.dateOfStart, "yyyy-MM-dd");
          return dataResponse;
        }
      ));
  }

  getProjectByProjectID(projectID: number): Observable<Project> {
    return this.httpClient.get<Project>(`api/projects/${projectID}`, { responseType: 'json' })
      .pipe(map(
        (dataResponse: Project) => {
          if (dataResponse != null) {
            dataResponse.dateOfStart = this.datePipe.transform(dataResponse.dateOfStart, "yyyy-MM-dd");
          }
          return dataResponse;
        }
      ));
  }

  updateProject(projectID: number, existingProject: Project): Observable<Project> {
    return this.httpClient.put<Project>(`api/projects/${projectID}`, existingProject, { responseType: 'json' })
      .pipe(map(
        (dataResponse: Project) => {
          dataResponse.dateOfStart = this.datePipe.transform(dataResponse.dateOfStart, "yyyy-MM-dd");
          return dataResponse;
        }
      ));
  }

  deleteProject(projectID: number): Observable<void> {
    return this.httpClient.delete<void>(`api/projects/${projectID}`);
  }

  searchProjects(searchBy: string, searchText: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`api/projects/search?searchBy=${searchBy}&searchText=${searchText}`, { responseType: 'json' })
      .pipe(map(
        (dataResponse: Project[]) => {
          for (let i = 0; i < dataResponse.length; i++) {
            dataResponse[i].dateOfStart = this.datePipe.transform(dataResponse[i].dateOfStart, "yyyy-MM-dd");
          }
          return dataResponse;
        }
      ));
  }
}
