using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend_MongoDb.Models;
using Backend_MongoDb.Data;
using Backend_MongoDb.Response;
using Backend_MongoDb.dto;
using Backend_MongoDb.Services;

namespace Backend_MongoDb.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        
        private readonly dbcontext _dbContext;

        public UserController(dbcontext context){
            _dbContext =  context;
        }

        [HttpGet()]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            var response = new ResponseUser();
            if(_dbContext.Users == null){
                response.Status = "Not Complete";
                response.Message = "Not Found Data in Database";
                return NotFound(response);
            }
            return await _dbContext.Users.Include(x=>x.Orders).ToListAsync();
        }

        [HttpGet("{Userid}")]
        public async Task<ActionResult<User>> GetUser(Guid Userid)
        {
            var response = new ResponseUser();
            response.UserId = Userid;
            if( _dbContext.Users == null) {
                response.Status = "Not Complete";
                response.Message = "Not Found Data in Database";
                return NotFound(response);

            }

            var user = await _dbContext.Users.FindAsync(Userid);
            if (user == null) {
                response.Status = "Not Complete";
                response.Message = "User Not Found";
                return NotFound(response);

            }

            return user;
        }

        [HttpPost("edit/{UserId}")]
        public async Task<IActionResult> EditProfileUser([FromBody] EditProfile request, Guid UserId)
        {
            var user = await _dbContext.Users.FindAsync(UserId);
            var response = new ResponseUser();
            response.UserId = UserId;
            if (user == null){
                response.Status = "Not Complete";
                response.Message = "User not found.";
                return NotFound(response);
            }
            UserService.PassHash passHash = UserService.CreatePasswordHash(request.Password);
            
            user.UserName = request.UserName;
            user.PasswordHash = passHash.PasswordHash;
            user.PasswordSalt = passHash.PasswordSalt;
            user.Name = request.Name;
            user.LastName = request.LastName;
            user.Email = request.Email;
            user.PhoneNumber = request.PhoneNumber;
            user.UpdateTime = DateTime.Now;

            await _dbContext.SaveChangesAsync();
            response.Status = "Complete";
            response.Message = "Edit Profile Success.";

            return Ok(response);
        }

        [HttpGet("image/{Userid}")]
        public async Task<IActionResult> GetImageProflie(Guid Userid)
        {
            var user = await _dbContext.Users.FindAsync(Userid);
            var response = new ResponseUser();
            response.UserId = Userid;
            if(user == null){
                response.Status = "Not Complete";
                response.Message = "User Not Found";
                return NotFound();
            }
            if (user.Photo == null){
                return NotFound();
            }
            var Image = File(user.Photo, "image/jpeg");
            return Image;
        }

        [HttpDelete("delete/{Userid}")]
        public async Task<IActionResult> DeleteUser(Guid Userid) {
            
            var user = await _dbContext.Users.FindAsync(Userid);
            var response = new ResponseUser();
            response.UserId = Userid;
            if (user == null){
                response.Status = "Not Complete";
                response.Message = "User not found";
                return NotFound("User not found");
            }
            _dbContext.Users.Remove(user);
            await _dbContext.SaveChangesAsync();
            response.Status = "Complete";
            response.Message = "Deleted User { " + user.UserName + " }";
            return Ok(response);
        }

    }
}