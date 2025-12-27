using Microsoft.EntityFrameworkCore;

namespace Smart_School.Data
{
    public class ApplicationDbContext : DbContext
    {
            public ApplicationDbContext(DbContextOptions options) : base(options)
            {
            }

           

    }
}
