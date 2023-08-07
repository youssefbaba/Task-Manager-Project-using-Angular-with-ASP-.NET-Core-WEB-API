using MvcTaskManger.Models;

namespace MvcTaskManger.ViewModels
{
    public class CountryViewModel
    {
        public int CountryID { get; set; }

        public string CountryName { get; set; }
    }

    public static class CountryViewModelExtension
    {
        public static Country ConvertCountryViewModelToCountry(this CountryViewModel countryViewModel)
        {
            return new Country()
            {
                CountryID = countryViewModel.CountryID,
                CountryName = countryViewModel.CountryName
            };
        }
    }


}
