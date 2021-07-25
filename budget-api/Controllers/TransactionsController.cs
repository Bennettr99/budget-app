using Common.Entities;
using Managers.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budget_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        private readonly ITransactionsManager _transactionManager;

        public TransactionsController(ITransactionsManager transactionManager)
        {
            _transactionManager = transactionManager;
        }

        [HttpGet("{id}")]
        public IEnumerable<Transaction> GetAll(int id)
        {
            return _transactionManager.GetAll(id);
        }

        [HttpGet("{id}/{userId}")]
        public Transaction Get(int id, int userId)
        {
            return _transactionManager.GetTransactionById(userId, id);
        }

        // POST api/<TransactionController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TransactionController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TransactionController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
