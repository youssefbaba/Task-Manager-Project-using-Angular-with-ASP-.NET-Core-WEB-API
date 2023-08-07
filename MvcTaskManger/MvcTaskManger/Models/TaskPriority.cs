using MvcTaskManger.ViewModels;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MvcTaskManger.Models
{
    public class TaskPriority
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TaskPriorityID { get; set; }

        public string TaskPriorityName { get; set; }
    }

    public static class TaskPriorityExtension
    {
        public static TaskPriorityViewModel ConvertTaskPriorityToTaskPriorityViewModel(this TaskPriority taskPriority)
        {
            return new TaskPriorityViewModel()
            {
                TaskPriorityID = taskPriority.TaskPriorityID,
                TaskPriorityName = taskPriority.TaskPriorityName
            };
        }
    }
}
