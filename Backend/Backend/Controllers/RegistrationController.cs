using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Backend.Models;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public RegistrationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        [Route("registration")]
        public string registration(UserRegistration userRegistration)
        {
            SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("UserCon").ToString());
            SqlCommand cmd = new SqlCommand("INSERT INTO Registration(Username,Password,Email,Phonenumber,Name,Lastname) VALUES('"+userRegistration.Username+"', '"+userRegistration.Password+"','"+userRegistration.Email+"','"+userRegistration.Phonenumber+"','"+userRegistration.Name+"','"+userRegistration.Lastname+"' )", conn);
            conn.Open();
            int i = cmd.ExecuteNonQuery();
            conn.Close();
            if(i > 0)
            {
                return "Data inserted";
            }
            return "Error";
        }

        [HttpPost]
        [Route("login")]
        public string login(UserRegistration userRegistration)
        {
            SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("UserCon").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM Registration WHERE Email = '"+userRegistration.Email+"' AND Password = '"+userRegistration.Password+"'", conn );
            DataTable dt = new DataTable();
            da.Fill( dt );
            if(dt.Rows.Count > 0)
            {
                return "Valid User";
            }
            else
            {
                return "Invalid User";
            }
        }
    }
}
