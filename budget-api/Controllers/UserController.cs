using Common.Entities;
using Managers.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budget_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserManager _userManager;

        public UserController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        public IEnumerable<Users> GetAllUsers()
        {
            return _userManager.GetAll();
        }

        [HttpGet("{id}")]
        public Users Get(int id)
        {
            return _userManager.GetUserById(id);
        }
    }
}
