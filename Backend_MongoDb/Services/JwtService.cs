using Backend_MongoDb.dto;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Cryptography;
using Backend_MongoDb.Models;


namespace Backend_MongoDb.Services
{
    public class JwtService {
        public static string TokenKey = "It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.";
        
        public JwtService(){
            
        }
        
        public static string CreateToken(User user){
            
            List<Claim> claims = new List<Claim>{
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.PrimarySid, user.Id.ToString()),
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                TokenKey));

            var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha512Signature);

            var Token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds
            );

            var Jwt = new JwtSecurityTokenHandler().WriteToken(Token);

            return Jwt;
        }


        public static RefreshToken GenerateRefreshToken(){
            
            var refreshToken = new RefreshToken
            {
                Token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
                Expires = DateTime.Now.AddDays(7),
                Created = DateTime.Now
            };
            return refreshToken;
        }

    }

    public class RefreshToken
    {
        public string Token = string.Empty;
        public DateTime Expires;
        public DateTime Created = DateTime.Now;
    }
}