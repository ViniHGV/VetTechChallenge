using Microsoft.EntityFrameworkCore;
using server.Core.Models;

namespace server.Infrastructure.Persistence
{
    public class AppDbContext(IConfiguration configuration) : DbContext
    {
        private IConfiguration _configuration { get; set; } = configuration;
        public DbSet<Customer> Customers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            string? connectionString = _configuration
                .GetSection("ConnectionStrings")
                .GetSection("DefaultConnection")
                .Value;

            options.UseSqlite("Data Source=Customers.db");
        }
    }
}
