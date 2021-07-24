using budget_api;
using Common.Entities;
using Handlers.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Handlers
{
    public class TransactionHandler : ITransactionHandler
    {
        private readonly FinanceDbContext _dbContext;

        public TransactionHandler(FinanceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Transactions> GetAll()
        {
            return _dbContext.Transactions;
        }

        public Transactions GetTransactionById(int userId, int transactionId)
        {
            return _dbContext.Transactions.FirstOrDefault(t => t.TransactionId == transactionId && t.UserId == userId);
        }
    }
}
