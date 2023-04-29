namespace Backend_MongoDb.dto
{
    public class MenuOrder {
        
        public Guid OrderId {get; set;}
        public string Name {get; set;} = string.Empty;
        public string NameRestaurant {get; set;} = string.Empty;
    }
}