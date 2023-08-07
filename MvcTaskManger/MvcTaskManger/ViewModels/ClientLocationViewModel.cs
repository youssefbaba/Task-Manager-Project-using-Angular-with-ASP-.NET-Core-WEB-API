using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using MvcTaskManger.Models;

namespace MvcTaskManger.ViewModels
{
    public class ClientLocationViewModel
    {
        public int ClientLocationID { get; set; }

        public string ClientLocationName { get; set; }
    }

    public static class ClientLocationViewModelExtension
    {
        public static ClientLocation ConvertClientLocationViewModelToClientLocation(this ClientLocationViewModel clientLocationViewModel)
        {
            return new ClientLocation()
            {
                ClientLocationID = clientLocationViewModel.ClientLocationID,
                ClientLocationName = clientLocationViewModel.ClientLocationName
            };
        }
    }
}
