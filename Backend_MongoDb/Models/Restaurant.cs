namespace Backend_MongoDb.Models
{
    public class Restaurant
    {
        // Restaurant ID
        public Guid Id {get; set;} = Guid.NewGuid();
        public string? Name {get; set;}

        //Relation
        public List<Menulist> menulists {get; set;} = new List<Menulist>();
    }
}