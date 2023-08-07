import { Component, OnInit } from '@angular/core';
import { GroupedTask } from 'src/app/models/grouped-task';
import { LoginService } from 'src/app/services/login.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  taskGroups!: GroupedTask[];
  showLoading : boolean = true;

  constructor(private tasksService: TasksService, public loginService: LoginService) { }

  ngOnInit(): void {
    this.tasksService.getAllTasks().subscribe({
      next: (response: GroupedTask[]) => {
        this.taskGroups = response;
        this.showLoading = false;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  /* set background color of Taskgroup based on task status */
  setTaskGroupBgCssClass(taskStatusName: string): string {
    switch (taskStatusName) {
      case "Holding":
        return "bg-secondary text-white";
      case "Prioritized":
        return "bg-primary text-white";
      case "Started":
        return "bg-info text-white";
      case "Finished":
        return "bg-success text-white";
      case "Reverted":
        return "bg-danger text-white";
      default:
        return "";
    }
  }

  /* Set background color of task priority */
  getTaskPriorityBgCssClass(taskPriorityName: string): string {
    switch (taskPriorityName) {
      case "Urgent":
        return "bg-danger";
      case "Normal":
        return "bg-primary";
      case "Bellow Normal":
        return "bg-info";
      case "Low":
        return "bg-secondary";
      default:
        return "";
    }
  }

  /* Set background color of task priority */
  getTaskStatusTextCssClass(taskStatusName: string): string {
    switch (taskStatusName) {
      case "Holding":
        return "text-secondary";
      case "Prioritized":
        return "text-primary";
      case "Started":
        return "text-info";
      case "Finished":
        return "text-success";
      case "Reverted":
        return "text-danger";
      default:
        return "";
    }
  }
}
