using Microsoft.AspNetCore.Identity;
using MvcTaskManger.Models;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcTaskManger.Identity
{
    public class ApplicationUser : IdentityUser<string>
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string Gender { get; set; }

        public bool ReceiveNewsLetters { get; set; }

        public int CountryID { get; set; } // Foreign Key of Countries table

        [ForeignKey("CountryID")]
        public virtual Country Country { get; set; }  // Navigation Property

        // We can add some extra properties for Users table here ...
        [NotMapped]
        public string Token { get; set; }

        [NotMapped]
        public string Role { get; set; }
    }
}
