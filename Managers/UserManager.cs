﻿using Common.Entities;
using Handlers.Interfaces;
using Managers.Interfaces;
using System;
using System.Collections.Generic;

namespace Managers
{
    public class UserManager : IUserManager
    {
        private readonly IUserHandler _userHandler;

        public UserManager(IUserHandler userHandler)
        {
            _userHandler = userHandler;
        }

        public IEnumerable<Users> GetAll()
        {
            return _userHandler.GetAll();
        }

        public Users GetUserById(int userId)
        {
            return _userHandler.GetUserById(userId);
        }
    }
}