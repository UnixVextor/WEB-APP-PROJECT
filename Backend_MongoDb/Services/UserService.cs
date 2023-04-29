using System.Security.Cryptography;

namespace Backend_MongoDb.Services
{
    public class UserService
    {
        public static PassHash CreatePasswordHash(string password){
            PassHash passHash = new PassHash();
            using (var hmac = new HMACSHA512()){
                passHash.PasswordSalt = hmac.Key;
                passHash.PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
            return passHash;
        }

        public static bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt){
            using (var hmac = new HMACSHA512(passwordSalt)){
                var computeHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computeHash.SequenceEqual(passwordHash);
            }
        }

        public class PassHash
        {
            public byte[]? PasswordHash {get; set;}
            public byte[]? PasswordSalt {get; set;}
        } 

        
        
    }
}