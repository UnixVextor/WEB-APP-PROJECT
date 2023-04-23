using System.Text.Json.Serialization;

namespace Backend_MongoDb.Models
{
    public class Menulist
    {
        // MenuList Id 
        public Guid id {get;set;} = Guid.NewGuid();
        public int? Price {get; set;}
        public string? Name {get; set;}

        // Restaurant ID
        public Guid RestaurantId {get; set;}

        // Relation
        [JsonIgnore]
        public Restaurant Restaurant {get; set;} = null!;
    }
}