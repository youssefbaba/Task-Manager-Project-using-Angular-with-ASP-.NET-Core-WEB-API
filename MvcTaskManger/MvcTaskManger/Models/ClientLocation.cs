using MvcTaskManger.ViewModels;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcTaskManger.Models
{
    public class ClientLocation
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClientLocationID { get; set; }

        public string ClientLocationName { get; set; }

    }

    public static class ClientLocationExtension
    {
        public static ClientLocationViewModel ConvertClientLocationToClientLocationViewModel(this ClientLocation clientLocation)
        {
            return new ClientLocationViewModel()
            {
                ClientLocationID = clientLocation.ClientLocationID,
                ClientLocationName = clientLocation.ClientLocationName
            };
        }
    }
}
