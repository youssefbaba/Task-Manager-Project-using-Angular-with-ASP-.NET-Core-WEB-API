using MvcTaskManger.Identity;
using MvcTaskManger.Models;
using System.Collections.Generic;
using System;

namespace MvcTaskManger.ViewModels
{
    public class TaskViewModel
    {
        public int TaskID { get; set; }

        public string TaskTitle { get; set; }

        public string Description { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime LastUpdatedOn { get; set; }

        public int ProjectID { get; set; }

        public Project Project { get; set; }

        public string CreatedBy { get; set; }

        public ApplicationUser CreatedByUser { get; set; }

        public string AssignedTo { get; set; }

        public ApplicationUser AssignedToUser { get; set; }

        public int TaskPriorityID { get; set; }

        public TaskPriority TaskPriority { get; set; }

        public string CurrentStatus { get; set; }

        public int CurrentTaskStatusID { get; set; }

        public  ICollection<TaskStatusDetail> TaskStatusDetails { get; set; }

    }

    public static class TaskViewModelExtension
    {
        public static Task ConvertTaskViewModelToTask(this TaskViewModel taskViewModel)
        {
            return new Task()
            {
                TaskID = taskViewModel.TaskID,
                TaskTitle = taskViewModel.TaskTitle,
                Description = taskViewModel.Description,
                CreatedOn = taskViewModel.CreatedOn,
                LastUpdatedOn = taskViewModel.LastUpdatedOn,
                ProjectID = taskViewModel.ProjectID,
                Project = taskViewModel.Project,
                CreatedBy = taskViewModel.CreatedBy,
                CreatedByUser = taskViewModel.CreatedByUser,
                AssignedTo = taskViewModel.AssignedTo,
                AssignedToUser = taskViewModel.AssignedToUser,
                TaskPriorityID = taskViewModel.TaskPriorityID,
                TaskPriority = taskViewModel.TaskPriority,
                CurrentStatus = taskViewModel.CurrentStatus,
                CurrentTaskStatusID = taskViewModel.CurrentTaskStatusID,
                TaskStatusDetails = taskViewModel.TaskStatusDetails
            };
        }

    }

}
