using Backend_MongoDb.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend_MongoDb.Data {
    public class dbcontext : DbContext {
        public dbcontext(DbContextOptions<dbcontext> options): base (options) 
        { 
                
        }

        // Add Table
        public DbSet<User> Users {get; set;}
        public DbSet<Restaurant>? Restaurants {get; set;}
        public DbSet<Order>? Oreders {get; set;}
        public DbSet<Menu>? Menus {get; set;}
        public DbSet<Menulist>? Menulists {get; set;}

        
    }
}