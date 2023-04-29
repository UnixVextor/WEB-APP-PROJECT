namespace Backend_MongoDb.Response
{
    public class ResponseUser
    {
        public Guid UserId {get; set;}
        public string Status {get; set;} = string.Empty;
        public string Message {get; set;} = string.Empty;
    }
}