using MvcTaskManger.Models;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcTaskManger.ViewModels
{
    public class ProjectViewModel
    {

        // It is not recommended to expose the model class to front-end application so you need to create DTO or ViewModel class

        public int ProjectID { get; set; }

        public string ProjectName { get; set; }

        public string DateOfStart { get; set; }

        public int? TeamSize { get; set; }

        public bool Active { get; set; }

        public string Status { get; set; }

        public int ClientLocationID { get; set; }

        public virtual ClientLocation ClientLocation { get; set; }
    }

    public static class ProjectViewModelExtention
    {
        public static Project ConvertProjectViewModelToProject(this ProjectViewModel projectViewModel)
        {
            return new Project()
            {
                ProjectID = projectViewModel.ProjectID,
                ProjectName = projectViewModel.ProjectName,
                DateOfStart = Convert.ToDateTime(projectViewModel.DateOfStart),
                TeamSize = projectViewModel.TeamSize,
                Active = projectViewModel.Active,
                Status = projectViewModel.Status,
                ClientLocationID = projectViewModel.ClientLocationID,
                ClientLocation = projectViewModel.ClientLocation
            };
        }
    }
}
