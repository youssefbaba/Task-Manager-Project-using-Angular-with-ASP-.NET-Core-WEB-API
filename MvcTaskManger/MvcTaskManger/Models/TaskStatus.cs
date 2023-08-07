using MvcTaskManger.ViewModels;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MvcTaskManger.Models
{
    public class TaskStatus
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TaskStatusID { get; set; }

        public string TaskStatusName { get; set; }
    }

    public static class TaskStatusExtension
    {
        public static TaskStatusViewModel ConvertTaskStatusToTaskStatusViewModel(this TaskStatus taskStatus)
        {
            return new TaskStatusViewModel()
            {
                TaskStatusID = taskStatus.TaskStatusID,
                TaskStatusName = taskStatus.TaskStatusName
            };
        }
    }
}
