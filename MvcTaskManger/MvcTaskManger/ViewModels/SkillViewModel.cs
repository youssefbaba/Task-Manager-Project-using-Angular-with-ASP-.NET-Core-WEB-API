using MvcTaskManger.Identity;

namespace MvcTaskManger.ViewModels
{
    public class SkillViewModel
    {
        public int SkillID { get; set; }

        public string SkillName { get; set; }

        public string ExpertiseLevel { get; set; }

        public int Id { get; set; }

        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}
