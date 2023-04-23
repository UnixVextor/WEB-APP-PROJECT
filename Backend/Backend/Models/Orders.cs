using System.Collections.Specialized;

namespace Backend.Models
{
    public class Orders
    {
        public int customerID { get; set; }
        public string Address { get; set; } = "";
        public string Note { get; set; } = "";
        public int riderID { get; set; } 
        public string foodList { get; set; } = "";
        public string Status { get; set; } = "";
    }
}
