using budget_api;
using Common.Entities;
using Handlers.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Handlers
{
    public class UserHandler: IUserHandler
    {
        private readonly FinanceDbContext _context;
        public UserHandler(FinanceDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Users> GetAll()
        {
            return _context.Users;
        }

        public Users GetUserById(int userId)
        {
            return _context.Users.FirstOrDefault(user => user.UserId == userId);
        }
    }
}
