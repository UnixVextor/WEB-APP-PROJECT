namespace Backend_MongoDb.Response
{
    public class ReponseLogin
    {
        public string UserName {get; set;} = string.Empty;
        public string Status {get; set;} = string.Empty;
        public string? message {get; set;}= string.Empty;
        public string? Token {get; set;} = "Not Found.";
    }
}