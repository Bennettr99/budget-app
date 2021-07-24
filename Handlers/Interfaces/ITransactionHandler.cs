using Common.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Handlers.Interfaces
{
    public interface ITransactionHandler
    {
        Transactions GetTransactionById(int userId, int transactionId);
        IEnumerable<Transactions> GetAll();
    }
}
