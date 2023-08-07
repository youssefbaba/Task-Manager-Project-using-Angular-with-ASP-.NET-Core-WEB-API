using Microsoft.AspNetCore.Builder.Internal;
using MvcTaskManger.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcTaskManger.Models
{
    public class Skill
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SkillID { get; set; }

        public string SkillName { get; set; }

        public string ExpertiseLevel { get; set; }

        public string Id { get; set; }  // Foreign Key of Users table

        [ForeignKey("Id")]
        public virtual ApplicationUser ApplicationUser { get; set; }  // Navigation Property


    }
}
