namespace Backend.Models
{
    public class UserRegistration
    {
        public int ID { get; set; }
        public string Username { get; set; } = "";
        public string Password { get; set; } = "";
        public string Email { get; set; } = "";
        public string Phonenumber { get; set; } = "";
        public string Name { get; set; } = "";
        public string Lastname { get; set; } = "";

    }
}
