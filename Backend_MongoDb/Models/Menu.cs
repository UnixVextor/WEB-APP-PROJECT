using System.Text.Json.Serialization;

namespace Backend_MongoDb.Models
{
    public class Menu
    {
        // Menu ID 
        public Guid Id {get; set;} = Guid.NewGuid();
        
        // Order ID (FK)
        public Guid OrderId {get; set;}

        public string? Name {get; set;}
        public string? RestaurantName {get; set;}

        // Relation
        [JsonIgnore]
        public Order? Orders {get; set;}
   
    }


}