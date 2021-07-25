using Common.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Handlers.Interfaces
{
    public interface IUsersHandler
    {
        User GetUserById(int userId);
        IEnumerable<User> GetAll();
    }
}
