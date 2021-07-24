using Common.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budget_api
{
    public class FinanceDbContext : DbContext
    {
        public DbSet<Users> Users { get; set; }
        public FinanceDbContext(DbContextOptions<FinanceDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Users>();
        }
    }
}
