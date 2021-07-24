using Common.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Managers.Interfaces
{
    public interface ITransactionManager
    {
        Transactions GetTransactionById(int userId, int transactionId);
        IEnumerable<Transactions> GetAll();
    }
}
