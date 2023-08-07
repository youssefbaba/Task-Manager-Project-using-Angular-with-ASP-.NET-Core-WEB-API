using MvcTaskManger.ViewModels;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcTaskManger.Models
{
    public class Country
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CountryID { get; set; }

        public string CountryName { get; set; }
    }

    public static class CountryExtension
    {
        public static CountryViewModel ConvertCountryToCountryViewModel(this Country country)
        {
            return new CountryViewModel()
            {
                CountryID = country.CountryID,
                CountryName = country.CountryName
            };
        }
    }
}
