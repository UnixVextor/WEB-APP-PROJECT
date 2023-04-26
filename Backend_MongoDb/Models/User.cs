using System.Text.Json.Serialization;
namespace Backend_MongoDb.Models
{
    public class User
    {
        // User ID
        public Guid Id {get; set;} = Guid.NewGuid();

        public string UserName {get; set;} = string.Empty;
        public string Email {get; set;} = string.Empty;
        public byte[]? PasswordHash {get; set;}
        public byte[]? PasswordSalt {get; set;}

        public string PhoneNumber {get; set;} = string.Empty;

        public string? Name {get; set;} = string.Empty;

        public string? LastName {get; set;} = string.Empty;

        public bool IsActive {get; set;} = false;
        [JsonIgnore]
        public byte[]? Photo {get; set;}
        public Guid RecivedId {get; set;}

        public int Allscore {get; set;}  = 0;
        public int AverageScore {get; set;} = 0;
        public int recordOrder {get; set;} = 0;
        // Time Stamp
        public DateTime CreateTime {get; set;} = DateTime.Now;
        public DateTime UpdateTime {get; set;} = DateTime.Now;

        // Token and Cookie
        public string Token {get; set;} = string.Empty;
        public DateTime TokenCreated {get; set;}
        public DateTime TokenExpires {get; set;}
        /* Ralation one to many -> Order
                    one to on -> Rider
        */  
        public List<Order> Orders {get;} = new List<Order>();
    }
}