using Microsoft.AspNetCore.Mvc;
using Backend_MongoDb.Data;
using Backend_MongoDb.Models;
using Microsoft.EntityFrameworkCore;
using Backend_MongoDb.dto;
using Backend_MongoDb.Services;
using Backend_MongoDb.Response;

namespace Backend_MongoDb.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly dbcontext _dbContext;
        public OrderController(dbcontext context){
            _dbContext = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Order>>> GetAllOrder()
        {
            if (_dbContext.Oreders == null){
                return NotFound("Order Not Found");
            }

            return await _dbContext.Oreders.ToListAsync();
        }

        [HttpPost("createOrder")]
        public async Task<ActionResult<Order>> CreateOrder(Guid Userid)
        {
            var user = await _dbContext.Users.FindAsync(Userid);
            var response = new ResponseOrder();
            if (user == null){  
                response.Status = "Not Complete";
                response.Message = "User Not Found";
                return BadRequest(response);
            }
            var neworder = new Order{
                Id = Guid.NewGuid(),
                Note = string.Empty,
                Address = string.Empty,
                Status = "Pending",
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                User = user,
                Menus = {},
                ResivedId = null
            };
            response.OrderId = neworder.Id;
            if(_dbContext.Oreders.FindAsync(neworder.Id) == null){
                response.Status = "Not Complete";
                response.Message = "Alredy have this Order ID";
                return NotFound();
            }
            response.Status = "Complete";
            response.Message = "Adding Orde Success.";
            _dbContext.Oreders.Add(neworder);
            await _dbContext.SaveChangesAsync();
            return Ok(response);
        }

        [HttpGet("available")]
        public async Task<ActionResult<List<Order>>> GatAvailableOrder()
        {
            var order = await _dbContext.Oreders.Where(item => item.Status == "Pending").ToListAsync();
            if(order == null){
                return NotFound("Not Found Data in Database");
            }
            return order;
        }

        [HttpPost("addMenu")]
        public async Task<IActionResult> AddmenuToOrder([FromBody] MenuOrder request)
        {
            var order = await _dbContext.Oreders.FindAsync(request.OrderId);
            var response = new ResponseOrder();
            response.OrderId = request.OrderId;
            if(order == null){
                response.Status = "Not Complete";
                response.Message = "Order Not Found";
                return NotFound(response);
            }

            var newmenu = new Menu{
                Id = Guid.NewGuid(),
                Name = request.Name,
                RestaurantName = request.NameRestaurant,
                Orders = order
            };

            if(_dbContext.Menus.FindAsync(newmenu.Id) != null){
                response.Status = "Not Complete";
                response.Message = "Already have Menu ID";
                return NotFound(response);
            }     
            
            _dbContext.Menus.Add(newmenu);
            await _dbContext.SaveChangesAsync();
            response.Status = "Complete";
            response.Message = "Adding Menu Success,";
            return Ok(response);
        }

        [HttpPost("accptOrder")]
        public async Task<ActionResult> AcceptOrder([FromBody] AcceptOrder request)
        {
            var order = await _dbContext.Oreders.FindAsync(request.OrderId);
            var response = new ResponseOrder();

            response.OrderId = request.OrderId;
            if (order == null) {
                response.Status = "Not Complete";
                response.Message = "Order Not Found";
                return NotFound(response);
            }
            order.Status = "Accept";
            order.ResivedId = request.RecivedId;
            order.UpdateTime = DateTime.Now;
            response.Status = "Complete";
            response.Message = "Accpt Order Complete.";
            await _dbContext.SaveChangesAsync(); 
            return Ok(response);
        }

        [HttpGet("menulist")]
        public async Task<IActionResult> GetMenuListInOrder(Guid Orderid)
        {
            var menulist = await _dbContext.Menus.Where(x=> x.OrderId == Orderid).ToListAsync();
            var response = new ResponseOrder();
            response.OrderId = Orderid;
            if(menulist == null){
                response.Status = "Not Complte";
                response.Message = "Menu Not Found.";
                return NotFound(response);
            }
            return Ok(menulist);
        }

        [HttpPost("updateOrder")]
        public async Task<IActionResult> UpdateOrder(Guid OrderId, Guid RiderId,int RiderScore = 0)
        {
            var order = await _dbContext.Oreders.FindAsync(OrderId);
            var user =  _dbContext.Users.Where(x => x.RecivedId == RiderId).FirstOrDefault();
            var response = new ResponseOrder();
            if (order == null || user == null){
                return NotFound();
            }
            response.OrderId = OrderId;
            if (order.Status == "deliver"){
                response.Status = "Not Complte";
                response.Message = "Can not Update Order.";
                return BadRequest(response);
            }
            if(order.Status == null){
                return BadRequest();
            }
            order.Status = OrderService.UpdateOrder(order.Status);
            order.UpdateTime = DateTime.Now;
            user.Allscore += RiderScore;
            user.recordOrder += 1;
            user.AverageScore = (int) user.Allscore / user.recordOrder;   

            response.Status = order.Status;
            response.Message = "Update Complete.";
            
            await _dbContext.SaveChangesAsync();
            return Ok(response);
        }

        [HttpGet("getRiderOrder")]
        public async Task<IActionResult> GetRiderScore(Guid RiderId)
        {
            var rider = await _dbContext.Users.Where(x => x.RecivedId == RiderId).FirstOrDefaultAsync();
            var response = new ResponseUser();
            if (rider == null){
                response.UserId = RiderId;
                response.Status = "Not Complete";
                response.Message = "Rider Id not found";
                return NotFound(response);
            }

            return Ok(rider.AverageScore);
        }

        [HttpDelete("deleteOrder/{OrderId}")]
        public async Task<IActionResult> DeleteOrder(Guid OrderId)
        {
            var order = await _dbContext.Oreders.FindAsync(OrderId);
            var response = new ResponseOrder();
            response.OrderId = OrderId;
            if (order == null){
                response.Status = "Not Complte";
                response.Message = "Order not found.";
                return NotFound(response);
            }
            if(order.Status != "Deliver"){
                response.Message = "Con not Delete Order status not deliver";
                return BadRequest(response);
            }
            response.Status = "Complete";
            response.Message = "Delete Success.";
            _dbContext.Oreders.Remove(order);
            await _dbContext.SaveChangesAsync();
            return Ok(response);
        }



    }
}