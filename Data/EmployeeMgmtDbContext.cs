using employee_mgmt.Models;
using Microsoft.EntityFrameworkCore;

namespace employee_mgmt.Data
{
	public class EmployeeMgmtDbContext : DbContext
	{
        public EmployeeMgmtDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
    }
}

