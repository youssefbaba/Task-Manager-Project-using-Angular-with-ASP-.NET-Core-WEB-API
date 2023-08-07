using MvcTaskManger.Models;
using System.Collections.Generic;

namespace MvcTaskManger.ViewModels
{
    public class GroupedTaskViewModel
    {
        public string TaskStatusName { get; set; }

        public ICollection<Task> Tasks { get; set; }
    }

    public static class GroupedTaskViewModelExtension
    {
        public static GroupedTask ConvertGroupedTaskViewModelToGroupedTask(this GroupedTaskViewModel groupedTaskViewModel)
        {
            return new GroupedTask()
            {
                TaskStatusName = groupedTaskViewModel.TaskStatusName,
                Tasks = groupedTaskViewModel.Tasks
            };
        }
    }
}
