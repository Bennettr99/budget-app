using Common.Entities;
using Handlers.Interfaces;
using Managers.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Managers
{
    public class TransactionsManager : ITransactionsManager
    {
        private readonly ITransactionsHandler _transactionHandler;

        public TransactionsManager(ITransactionsHandler transactionHandler)
        {
            _transactionHandler = transactionHandler;
        }

        public IEnumerable<Transaction> GetAll(int userId)
        {
            return _transactionHandler.GetAll(userId);
        }

        public Transaction GetTransactionById(int userId, int transactionId)
        {
            return _transactionHandler.GetTransactionById(userId, transactionId);
        }
    }
}
