using MvcTaskManger.Models;

namespace MvcTaskManger.ViewModels
{
    public class TaskStatusViewModel
    {
        public int TaskStatusID { get; set; }

        public string TaskStatusName { get; set; }

    }
    public static class TaskStatusViewModelExtension
    {
        public static TaskStatus ConvertTaskStatusViewModelToTaskStatus(this TaskStatusViewModel taskStatusViewModel)
        {
            return new TaskStatus()
            {
                TaskStatusID = taskStatusViewModel.TaskStatusID,
                TaskStatusName = taskStatusViewModel.TaskStatusName
            };
        }
    }
}
