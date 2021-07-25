using Common.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Managers.Interfaces
{
    public interface ITransactionsManager
    {
        Transaction GetTransactionById(int userId, int transactionId);
        IEnumerable<Transaction> GetAll(int userId);
    }
}
