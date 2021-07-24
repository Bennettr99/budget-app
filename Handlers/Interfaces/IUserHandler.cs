using Common.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Handlers.Interfaces
{
    public interface IUserHandler
    {
        Users GetUserById(int userId);
        IEnumerable<Users> GetAll();
    }
}
