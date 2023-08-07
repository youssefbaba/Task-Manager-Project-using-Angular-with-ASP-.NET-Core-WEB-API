using MvcTaskManger.ViewModels;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcTaskManger.Models
{
    public class Project
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ProjectID { get; set; }

        public string ProjectName { get; set; }

        public DateTime DateOfStart { get; set; }

        public int? TeamSize { get; set; }

        public bool Active { get; set; }

        public string Status { get; set; }

        public int ClientLocationID { get; set; }  // Foreign Key of ClientLocations table  

        [ForeignKey("ClientLocationID")]
        public virtual ClientLocation ClientLocation { get; set; }  // Navigation Property

    }

    public static class ProjectExtention
    {
        public static ProjectViewModel ConvertProjectToProjectViewModel(this Project project)
        {
            return new ProjectViewModel()
            {
                ProjectID = project.ProjectID,
                ProjectName = project.ProjectName,
                DateOfStart = project.DateOfStart.ToString(),
                TeamSize = project.TeamSize,
                Active = project.Active,
                Status = project.Status,
                ClientLocationID = project.ClientLocationID,
                ClientLocation = project.ClientLocation
            };
        }
    }


}
