using Common.Entities;
using Handlers.Interfaces;
using Managers.Interfaces;
using System;
using System.Collections.Generic;

namespace Managers
{
    public class UsersManager : IUsersManager
    {
        private readonly IUsersHandler _userHandler;

        public UsersManager(IUsersHandler userHandler)
        {
            _userHandler = userHandler;
        }

        public IEnumerable<User> GetAll()
        {
            return _userHandler.GetAll();
        }

        public User GetUserById(int userId)
        {
            return _userHandler.GetUserById(userId);
        }
    }
}
