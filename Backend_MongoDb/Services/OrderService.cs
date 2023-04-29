namespace Backend_MongoDb.Services
{
    public class OrderService
    {
        public static string UpdateOrder(string status){
            string[] Statuses = {"Pending","Accept Order","On the Way", "Waiting", "Accpet Food", "Deliver"};
            int index = Array.IndexOf(Statuses,status);
            return Statuses[index+1];
        }
    }
}