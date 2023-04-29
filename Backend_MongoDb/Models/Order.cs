
using System.Text.Json.Serialization;

namespace Backend_MongoDb.Models
{
    public class Order
    {
        // Order ID
        public Guid Id {get; set;} = Guid.NewGuid();
        
        // User ID (FK)
        public Guid UserId {get; set;}
        
        public String? Note {get; set;}
        public String? Address {get; set;}
        public String? Status {get; set;}
        public Guid? ResivedId {get; set;}
        
        // TimeStamp
        public DateTime CreateTime {get; set;}
        public DateTime UpdateTime {get; set;}

        // Ralation 
        [JsonIgnore]
        public List<Menu> Menus {get;} = new List<Menu>();

        [JsonIgnore]
        public User User {get; set;} = null!;
    }
}