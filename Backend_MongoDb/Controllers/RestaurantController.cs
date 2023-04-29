using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend_MongoDb.Data;
using Backend_MongoDb.Models;
using Backend_MongoDb.Response;

namespace Backend_MongoDb.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RestaurantController : ControllerBase
    {
        private readonly dbcontext _dbContext;

        public RestaurantController(dbcontext context){
            _dbContext = context;
        }

        [HttpGet()]
        public async Task<ActionResult<List<Restaurant>>> GetAllRestaurant()
        { 
            var response = new ResponseRestaurant();
            if(_dbContext.Restaurants == null){
                response.Status = "Not Complete";
                response.Message = "Not Found Data in Database";
                return NotFound(response);
            }
            
            return  await _dbContext.Restaurants.Include(item => item.menulists).ToListAsync();
        }
        
        [HttpPost("addRestaurant")]
        public async Task<IActionResult> AddRestaurant(string name)
        {
            var restaurant = _dbContext.Restaurants.Where(item => item.Name == name).FirstOrDefault(); 
            var response = new ResponseRestaurant();
            response.RestaurantName = name;
            if (restaurant != null){
                response.Status = "Not Complete";
                response.Message = "Already have this restaurant";
                return BadRequest(response);
            }

            var newrestaurant = new Restaurant{
                Id = Guid.NewGuid(),
                Name = name
            };
            
            _dbContext.Restaurants.Add(newrestaurant);
            await _dbContext.SaveChangesAsync();
            response.Status = "Complete";
            response.Message = "Adding Restaurnt Success.";
            return Ok(response);
        }


        [HttpDelete("deleteRestaurnat/{RestaurantId}")]
        public async Task<IActionResult> DeleteRestaurant(Guid RestaurantId)
        {
            var restaurant = await _dbContext.Restaurants.FindAsync(RestaurantId);
            var response = new ResponseRestaurant();
            response.RestaurantId = RestaurantId;
            if(restaurant == null){
                response.Status = "Not Complete";
                response.Message = "The Restaurant not found.";
                return NotFound(response);
            }

            _dbContext.Restaurants.Remove(restaurant);
            await _dbContext.SaveChangesAsync();
            response.Status = "Complete";
            response.Message = "Delete Restaurant Complete { " + restaurant.Name +" }";
            return Ok(response);
        }



        [HttpPost("{RestaurantId}")]
        public async Task<ActionResult<Restaurant>> GetReataurant(Guid RestaurantId)
        {
            var Restaurant = await _dbContext.Restaurants.FindAsync(RestaurantId);
            var restaurant =_dbContext.Restaurants.Include(item => item.menulists).Where(x => x.Id == Restaurant.Id);
            var response = new ResponseRestaurant();
            response.RestaurantId = RestaurantId;
            if(restaurant == null){
                response.Status = "Not Complete";
                response.Message = "The Restaurant not found.";
                return NotFound(response);
            }

            return Ok(restaurant);
        }


        [HttpPost("addMenu")]
        public async Task<ActionResult<List<Restaurant>>> AddMenu(string nameRestaurant, string nameMenu, int Price)
        {
            var menu = await _dbContext.Menulists.Where(item => item.Name == nameMenu).FirstOrDefaultAsync(); 
            var restaurant = await _dbContext.Restaurants.Where(item => item.Name == nameRestaurant).FirstOrDefaultAsync();
            var response = new ResponsMenu();
            var ResponseRestaurant = new ResponseRestaurant();
            if (restaurant == null){
                ResponseRestaurant.RestaurantName = nameRestaurant;
                ResponseRestaurant.Status = "Not Complete";
                ResponseRestaurant.Message = "REstaurant not found";
                return NotFound(ResponseRestaurant);
            }

            if (menu != null){
                response.Status = "Not Complete";
                response.Message = "Already have this menu";
                return BadRequest(response);
            }

            var newMenu = new Menulist
            {
                id = Guid.NewGuid(),
                Name = nameMenu,
                Price = Price,
                Restaurant = restaurant
            };
            
            _dbContext.Menulists.Add(newMenu);
            await _dbContext.SaveChangesAsync();
            response.Status = "Complete";
            response.Message ="Adding menu Success.";
            return Ok(response);
        }

        [HttpDelete("deleteMenu/{MenuId}")]
        public async Task<IActionResult> Delete(Guid MenuId)
        {
            var menulist = await _dbContext.Menulists.FindAsync(MenuId);
            var response = new ResponsMenu();
            response.MenuId = MenuId;
            if (menulist == null){
                response.Status = "Not Complete";
                response.Message = "The Menulist Not Found";
                return NotFound(response);
            }
            _dbContext.Menulists.Remove(menulist);
            await _dbContext.SaveChangesAsync();
            response.Status = "Complete";
            response.Message = "Deleted menulist complete {" + menulist.Name + "}";
            return Ok(response);
        }


    }
}