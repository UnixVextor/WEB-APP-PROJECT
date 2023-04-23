using Backend_MongoDb.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend_MongoDb.Data {
    public class dbcontext : DbContext {
        public dbcontext(DbContextOptions<dbcontext> options): base (options) 
        { 
                
        }

        // protected override void OnModelCreating(ModelBuilder modelBuilder){
            // modelBuilder.Entity<Order>()
            // .HasKey(x => x.Id);

            // modelBuilder.Entity<Order>()
            // .HasOne(x=> x.User)
            // .WithMany(z => z.Orders)
            // .HasForeignKey(x => x.UserId)
            // .OnDelete(DeleteBehavior.ClientSetNull);

            // modelBuilder.Entity<Order>()
            // .HasOne(x=> x.Rider)
            // .WithMany(z => z.Orders)
            // .HasForeignKey(x => x.RiderId)
            // .OnDelete(DeleteBehavior.ClientSetNull);

            // modelBuilder.Entity<Order>()
            //     .HasMany(e => e.Rider)
            //     .WithMany(e => e.Orders);

        // }

        // Add Table
        public DbSet<User> Users {get; set;}
        // public DbSet<Rider>? Riders {get; set;}
        public DbSet<Restaurant>? Restaurants {get; set;}
        public DbSet<Order>? Oreders {get; set;}
        public DbSet<Menu>? Menus {get; set;}
        public DbSet<Menulist>? Menulists {get; set;}

        // public DbSet<OrderRider> OrderRiders {get; set;}
        
    }
}