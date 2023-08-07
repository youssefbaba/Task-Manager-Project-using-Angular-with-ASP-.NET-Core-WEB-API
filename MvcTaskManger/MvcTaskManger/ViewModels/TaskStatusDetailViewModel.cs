using MvcTaskManger.Identity;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using MvcTaskManger.Models;

namespace MvcTaskManger.ViewModels
{
    public class TaskStatusDetailViewModel
    {
        public int TaskStatusDetailID { get; set; }

        public int TaskID { get; set; }

        public int TaskStatusID { get; set; } 

        public TaskStatus TaskStatus { get; set; }

        public string UserID { get; set; }

        public virtual ApplicationUser User { get; set; } 

        public string Description { get; set; }

        public DateTime StatusUpdationDateTime { get; set; }
    }

    public static class TaskStatusDetailViewModelExtension
    {
        public static TaskStatusDetail ConvertTaskStatusDetailViewModelToTaskStatusDetail(this TaskStatusDetailViewModel taskStatusDetailViewModel)
        {
            return new TaskStatusDetail()
            {
                TaskStatusDetailID = taskStatusDetailViewModel.TaskStatusDetailID,
                TaskID = taskStatusDetailViewModel.TaskID,
                TaskStatusID = taskStatusDetailViewModel.TaskStatusID,
                TaskStatus = taskStatusDetailViewModel.TaskStatus,
                UserID = taskStatusDetailViewModel.UserID,
                User = taskStatusDetailViewModel.User,
                Description = taskStatusDetailViewModel.Description,
                StatusUpdationDateTime = taskStatusDetailViewModel.StatusUpdationDateTime
            };
        }
    }
}
