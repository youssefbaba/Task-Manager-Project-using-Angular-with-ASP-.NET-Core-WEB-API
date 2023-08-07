using MvcTaskManger.Models;

namespace MvcTaskManger.ViewModels
{
    public class TaskPriorityViewModel
    {
        public int TaskPriorityID { get; set; }

        public string TaskPriorityName { get; set; }
    }

    public static class TaskPriorityViewModelExtension
    {
        public static TaskPriority ConvertTaskPriorityViewModelToTaskPriority(this TaskPriorityViewModel taskPriorityViewModel)
        {
            return new TaskPriority()
            {
                TaskPriorityID = taskPriorityViewModel.TaskPriorityID,
                TaskPriorityName = taskPriorityViewModel.TaskPriorityName
            };
        }
    }
}
