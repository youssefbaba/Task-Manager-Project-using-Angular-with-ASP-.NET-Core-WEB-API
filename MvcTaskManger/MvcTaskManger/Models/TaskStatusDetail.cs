using MvcTaskManger.Identity;
using MvcTaskManger.ViewModels;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcTaskManger.Models
{
    public class TaskStatusDetail
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TaskStatusDetailID { get; set; }  // Primary Key of TaskStatusDetails table

        public int TaskID { get; set; } 

        public int TaskStatusID { get; set; }  // ForeignKey that refers to TaskStatuses table

        [ForeignKey("TaskStatusID")]
        public virtual TaskStatus TaskStatus { get; set; }  // Navigation Property

        public string UserID { get; set; } // ForeignKey that refers to Users table

        [ForeignKey("UserID")]
        public virtual ApplicationUser User { get; set; }  // navigation Property

        public string Description { get; set; }

        public DateTime StatusUpdationDateTime { get; set; }

    }
    
    public static class TaskStatusDetailExtension
    {
        public static TaskStatusDetailViewModel ConvertTaskStatusDetailToTaskStatusDetailViewModel(this TaskStatusDetail taskStatusDetail)
        {
            return new TaskStatusDetailViewModel()
            {
                TaskStatusDetailID = taskStatusDetail.TaskStatusDetailID,
                TaskID = taskStatusDetail.TaskID,
                TaskStatusID = taskStatusDetail.TaskStatusID,
                TaskStatus = taskStatusDetail.TaskStatus,
                UserID = taskStatusDetail.UserID,
                User = taskStatusDetail.User,
                Description = taskStatusDetail.Description,
                StatusUpdationDateTime = taskStatusDetail.StatusUpdationDateTime
            };
        }
    }
}
