using Common.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Managers.Interfaces
{
    public interface IUserManager
    {
        Users GetUserById(int userId);
        IEnumerable<Users> GetAllUsers();
    }
}
