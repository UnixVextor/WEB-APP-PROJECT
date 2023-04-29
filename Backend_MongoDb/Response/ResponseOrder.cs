namespace Backend_MongoDb.Response
{
    public class ResponseOrder
    {
        public Guid OrderId {get; set;}
        public string Status {get; set;} = string.Empty;

        public string Message {get; set;} = string.Empty;

    }
}