using budget_api;
using Common.Entities;
using Handlers.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Handlers
{
    public class UsersHandler: IUsersHandler
    {
        private readonly FinanceDbContext _context;
        public UsersHandler(FinanceDbContext context)
        {
            _context = context;
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users;
        }

        public User GetUserById(int userId)
        {
            return _context.Users.FirstOrDefault(user => user.UserId == userId);
        }
    }
}
