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
    public class UsersController : ControllerBase
    {
        private readonly IUsersManager _userManager;

        public UsersController(IUsersManager userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        public IEnumerable<User> GetAllUsers()
        {
            return _userManager.GetAll();
        }

        [HttpGet("{id}")]
        public User Get(int id)
        {
            return _userManager.GetUserById(id);
        }
    }
}
