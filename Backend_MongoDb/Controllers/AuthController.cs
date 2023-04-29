using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend_MongoDb.Models;
using Backend_MongoDb.Data;
using Backend_MongoDb.dto;
using Backend_MongoDb.Services;
using Backend_MongoDb.Response;


namespace Backend_MongoDb.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly dbcontext _dbContext;

        public AuthController(dbcontext context){
            
            _dbContext = context;
        }

        [HttpPost("Register")]
        public async Task<ActionResult<User>> Register(Register request)
        {
            var user = _dbContext.Users.Where(x => x.UserName == request.UserName)
                                        .FirstOrDefault();
            var response = new ResponseAuth();
            response.UserName = request.UserName;
            if (user != null){
                response.Status = "Not Complete";
                response.Message = "Already have this username";
                return BadRequest(response);
            }

            UserService.PassHash passHash = UserService.CreatePasswordHash(request.Password);
 
            var newUser = new User{
                Id = Guid.NewGuid(),
                UserName = request.UserName,
                Email = request.Email,
                PasswordHash = passHash.PasswordHash,
                PasswordSalt = passHash.PasswordSalt,
                PhoneNumber = request.PhoneNumber,
                Name = request.Name,
                LastName = request.LastName,
                CreateTime = DateTime.Now,
                UpdateTime = DateTime.Now,
                RecivedId = Guid.NewGuid(),
                Orders = {}
            };
            
            response.Status = "Complete";
            response.Message = "Register Success";
            _dbContext.Users.Add(newUser);
            await _dbContext.SaveChangesAsync();
            return Ok(response);
        }

        [HttpPost("UploadeProfile")]
        public async Task<IActionResult> UploadeImageProfile(IFormFile file, Guid UserId)
        {
            var user = await _dbContext.Users.FindAsync(UserId);
            var response = new ResponseUser();
            response.UserId = UserId;
            if(user == null){
                response.Status = "Not Complete";
                response.Message = "User Not Found";
                return NotFound(response);
            }
            if (file == null || file.Length == 0){
                response.Status = "Not Complete";
                response.Message = "No file was uploaded";
                return BadRequest(response);
            }

            var memoryStream = new MemoryStream();
            await file.CopyToAsync(memoryStream);
            user.Photo = memoryStream.ToArray();
            await _dbContext.SaveChangesAsync();
            response.Status = "Complete";
            response.Message = "Uploade Image Profile Success.";
            return Ok(response);
            
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Login request)
        {
            var user = _dbContext.Users.Where(x => x.UserName == request.UserName)
                                        .FirstOrDefault();
            var response = new ResponseAuth();
            response.UserName = request.UserName;
            response.Status = "Not Complete";
            if (user == null){
                response.Message = "User not Found";
                return NotFound(response);
            }

            if (user.PasswordHash != null && user.PasswordSalt != null){
                if (!UserService.VerifyPasswordHash(request.Password, user.PasswordHash,user.PasswordSalt)){
                    response.Message = "Wrong Password";
                    return NotFound(response);
                }
            }else{
                response.Message = "Server Error";
                return BadRequest(request);
            }

            string Token = JwtService.CreateToken(user);
            // var newrefreshToken = JwtService.GenerateRefreshToken();
            // SetRefreshToken(newrefreshToken); 
            
            user.Token = Token;
            user.IsActive = true;
            // user.Token = newrefreshToken.Token;
            // user.TokenCreated = newrefreshToken.Created;
            // user.TokenExpires = newrefreshToken.Expires;

            var Response = new ReponseLogin{
                UserName = request.UserName,
                Status = "Complte",
                message = "Login success.",
                Token = user.Token
            };

            await _dbContext.SaveChangesAsync();
            return Ok(Response);
        }

        
        [HttpGet("logout")]
        public async Task<IActionResult> Logout(Guid id)
        {
            var response = new ResponseUser();
            response.UserId = id;
            if( _dbContext.Users == null) {
                response.Status = "Not Complete";
                response.Message = "not Found User in Database";
                return NotFound(response);

            }

            var user = await _dbContext.Users.FindAsync(id);
            if (user == null) {
                response.Message ="User not Found";
                return NotFound(response);

            }
            user.IsActive = false;
            await _dbContext.SaveChangesAsync();
            response.Status = "Complete";
            response.Message = "Logout Success.";
            return Ok(response);
        }

        private void SetRefreshToken(RefreshToken newRefreshToken){
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = newRefreshToken.Expires
            };
            Response.Cookies.Delete("refreshToken");
            //Response.Cookies.Append("refreshToken", newRefreshToken.Token, cookieOptions);
        }
        
    }
}