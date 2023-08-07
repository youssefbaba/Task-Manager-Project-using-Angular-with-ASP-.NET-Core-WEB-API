using MvcTaskManger.ViewModels;
using System.Collections.Generic;

namespace MvcTaskManger.Models
{
    public class GroupedTask
    {
        public string TaskStatusName { get; set; }

        public ICollection<Task> Tasks { get; set; }
    }

    public static class GroupedTaskVExtension
    {
        public static GroupedTaskViewModel ConvertGroupedTaskToGroupedTaskViewModel(this GroupedTask groupedTask)
        {
            return new GroupedTaskViewModel()
            {
                TaskStatusName = groupedTask.TaskStatusName,
                Tasks = groupedTask.Tasks
            };
        }
    }
}
