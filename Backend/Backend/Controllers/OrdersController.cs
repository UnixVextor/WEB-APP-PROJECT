using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Backend.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public OrdersController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        [Route("AddOrder")]
        public string AddOrder(Orders order)
        {
            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("UserCon").ToString()))
            {
                SqlCommand cmd = new SqlCommand("INSERT INTO Orders(CustomerID, Address, FoodList, Status) VALUES(@CustomerID, @Address, @FoodList, @Status)", conn);
                cmd.Parameters.AddWithValue("@CustomerID", order.customerID);
                cmd.Parameters.AddWithValue("@Address", order.Address);
                cmd.Parameters.AddWithValue("@FoodList", order.foodList);
                cmd.Parameters.AddWithValue("@Status", "waiting for rider");
                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    return "Order added successfully";
                }
                else
                {
                    return "Error while adding order";
                }
            }
        }
        [HttpDelete]
        [Route("DeleteOrder/{riderId}/{customerId}")]
        public string DeleteOrder(int riderId, int customerId)
        {
            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("UserCon").ToString()))
            {
                SqlCommand cmd = new SqlCommand("DELETE FROM Orders WHERE RiderID = @RiderID AND CustomerID = @CustomerID", conn);
                cmd.Parameters.AddWithValue("@RiderID", riderId);
                cmd.Parameters.AddWithValue("@CustomerID", customerId);
                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    return "Order deleted successfully";
                }
                else
                {
                    return "Error while deleting order";
                }
            }
        }
        [HttpPut]
        [Route("AcceptOrder/{customerId}/{riderId}")]
        public string AcceptOrder(int customerId, int riderId)
        {
            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("UserCon").ToString()))
            {
                SqlCommand cmd = new SqlCommand("UPDATE Orders SET RiderID = @RiderID, Status = @Status WHERE CustomerID = @CustomerID AND RiderID IS NULL", conn);
                cmd.Parameters.AddWithValue("@RiderID", riderId);
                cmd.Parameters.AddWithValue("@CustomerID", customerId);
                cmd.Parameters.AddWithValue("@Status", "accepted by rider");
                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    return "Order accepted successfully";
                }
                else
                {
                    return "Error while accepting order";
                }
            }
        }
        [HttpPut]
        [Route("UpdateStatus/{customerId}/{riderId}/{status}")]
        public string UpdateStatus(int customerId, int riderId, string status)
        {
            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("UserCon").ToString()))
            {
                SqlCommand cmd = new SqlCommand("UPDATE Orders SET Status = @Status WHERE CustomerID = @CustomerID AND RiderID = @RiderID", conn);
                cmd.Parameters.AddWithValue("@Status", status);
                cmd.Parameters.AddWithValue("@CustomerID", customerId);
                cmd.Parameters.AddWithValue("@RiderID", riderId);
                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    if (status == "complete order")
                    {
                        // Delete the order if the status is "complete order"
                        return DeleteOrder(riderId, customerId);
                    }
                    else
                    {
                        return "Order status updated successfully";
                    }
                }
                else
                {
                    return "Error while updating order status";
                }
            }
        }
        [HttpGet]
        [Route("GetOrderDetail/{riderId}/{customerId}")]
        public IActionResult GetOrderDetail(int riderId, int customerId)
        {
            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("UserCon").ToString()))
            {
                SqlCommand cmd = new SqlCommand("SELECT * FROM Orders WHERE RiderID = @RiderID AND CustomerID = @CustomerID", conn);
                cmd.Parameters.AddWithValue("@RiderID", riderId);
                cmd.Parameters.AddWithValue("@CustomerID", customerId);
                conn.Open();
                SqlDataReader reader = cmd.ExecuteReader();
                if (reader.HasRows)
                {
                    reader.Read();
                    Orders order = new Orders();
                    order.customerID = Convert.ToInt32(reader["CustomerID"]);
                    order.riderID = Convert.ToInt32(reader["RiderID"]);
                    order.Address = reader["Address"].ToString();
                    order.foodList = reader["FoodList"].ToString();
                    order.Status = reader["Status"].ToString();
                    return Ok(order);
                }
                else
                {
                    return NotFound();
                }
            }
        }


    }
}
