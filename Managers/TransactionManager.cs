using Common.Entities;
using Handlers.Interfaces;
using Managers.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Managers
{
    public class TransactionManager : ITransactionManager
    {
        private readonly ITransactionHandler _transactionHandler;

        public TransactionManager(ITransactionHandler transactionHandler)
        {
            _transactionHandler = transactionHandler;
        }

        public IEnumerable<Transactions> GetAll()
        {
            return _transactionHandler.GetAll();
        }

        public Transactions GetTransactionById(int userId, int transactionId)
        {
            return _transactionHandler.GetTransactionById(userId, transactionId);
        }
    }
}
