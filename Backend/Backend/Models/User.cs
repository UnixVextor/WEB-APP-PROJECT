using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; } 
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Phonenumber { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
    }
}
