using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using employee_mgmt.Data;
using Microsoft.EntityFrameworkCore;
using employee_mgmt.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace employee_mgmt.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly EmployeeMgmtDbContext _employeeMgmtDbContext;

        public EmployeesController(EmployeeMgmtDbContext employeeMgmtDbContext)
        {
            _employeeMgmtDbContext = employeeMgmtDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await _employeeMgmtDbContext.Employees.ToListAsync();

            return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();

            await _employeeMgmtDbContext.Employees.AddAsync(employeeRequest);
            await _employeeMgmtDbContext.SaveChangesAsync();

            return Ok(employeeRequest);
        }
    }
}

