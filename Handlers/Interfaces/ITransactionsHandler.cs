using Common.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Handlers.Interfaces
{
    public interface ITransactionsHandler
    {
        Transaction GetTransactionById(int userId, int transactionId);
        IEnumerable<Transaction> GetAll(int userId);
    }
}
