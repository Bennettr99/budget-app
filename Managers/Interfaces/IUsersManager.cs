using Common.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Managers.Interfaces
{
    public interface IUsersManager
    {
        User GetUserById(int userId);
        IEnumerable<User> GetAll();
    }
}
