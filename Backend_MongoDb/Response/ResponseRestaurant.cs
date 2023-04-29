namespace Backend_MongoDb.Response
{
    public class ResponseRestaurant
    {
        public Guid RestaurantId {get; set;}
        public string RestaurantName {get; set;} = string.Empty;
        public string Status {get; set;} = string.Empty;
        public string Message {get; set;} = string.Empty;
    }
}