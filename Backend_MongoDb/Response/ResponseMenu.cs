namespace Backend_MongoDb.Response
{
    public class ResponsMenu
    {
        public Guid MenuId {get; set;}
        public String Status {get; set;} = string.Empty;
        public String Message {get; set;} = string.Empty;
    }
}