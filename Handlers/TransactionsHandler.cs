using budget_api;
using Common.Entities;
using Handlers.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Handlers
{
    public class TransactionsHandler : ITransactionsHandler
    {
        private readonly FinanceDbContext _dbContext;

        public TransactionsHandler(FinanceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Transaction> GetAll(int userId)
        {
            return _dbContext.Transactions.Where(t => t.UserId == userId);
        }

        public Transaction GetTransactionById(int userId, int transactionId)
        {
            return _dbContext.Transactions.FirstOrDefault(t => t.TransactionId == transactionId && t.UserId == userId);
        }
    }
}
