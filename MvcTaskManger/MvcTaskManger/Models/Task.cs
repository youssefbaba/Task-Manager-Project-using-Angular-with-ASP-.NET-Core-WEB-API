using MvcTaskManger.Identity;
using MvcTaskManger.ViewModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcTaskManger.Models
{
    public class Task
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TaskID { get; set; }  // Primary key for Tasks table

        public string TaskTitle { get; set; } // Title of the task

        public string Description { get; set; } // Description of the task

        public DateTime CreatedOn { get; set; }  // Date and time of task creation

        public DateTime LastUpdatedOn { get; set; } // Date and time of task last updation

        public int ProjectID { get; set; }  //Foreign Key of Projects table

        [ForeignKey("ProjectID")]
        public virtual Project Project { get; set; } // Navigation Property, indicating which project it belongs to

        public string CreatedBy { get; set; } //Foreign Key of Users table

        [ForeignKey("CreatedBy")]
        public virtual ApplicationUser CreatedByUser { get; set; }  // Navigation Property, indicating who created the task

        public string AssignedTo { get; set; } //Foreign Key of Users table

        [ForeignKey("AssignedTo")]
        public virtual ApplicationUser AssignedToUser { get; set; }  // Navigation Property, indicating to whom the task is assigned

        public int TaskPriorityID { get; set; }  //Foreign Key of TaskPriorities table

        [ForeignKey("TaskPriorityID")]
        public virtual TaskPriority TaskPriority { get; set; }  // Navigation property, Indicating the Priority of the task

        public string CurrentStatus { get; set; }  // Current status name of the task

        public int CurrentTaskStatusID { get; set; }  // Indicating ID of the current task status

        public virtual ICollection<TaskStatusDetail> TaskStatusDetails { get; set; }

    }

    public static class TaskExtension
    {
        public static TaskViewModel ConvertTaskToTaskViewModel(this Task task)
        {
            return new TaskViewModel()
            {
                TaskID = task.TaskID,
                TaskTitle = task.TaskTitle,
                Description = task.Description,
                CreatedOn = task.CreatedOn,
                LastUpdatedOn = task.LastUpdatedOn,
                ProjectID = task.ProjectID,
                Project = task.Project,
                CreatedBy = task.CreatedBy,
                CreatedByUser = task.CreatedByUser,
                AssignedTo = task.AssignedTo,
                AssignedToUser = task.AssignedToUser,
                TaskPriorityID = task.TaskPriorityID,
                TaskPriority = task.TaskPriority,
                CurrentStatus = task.CurrentStatus,
                CurrentTaskStatusID = task.CurrentTaskStatusID,
                TaskStatusDetails = task.TaskStatusDetails
            };
        }

    }

}
