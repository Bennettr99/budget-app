using Common.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Common.Entities
{
    [Table("Transactions", Schema = "dimension")]
    public class Transaction
    {
        [Key]
        public int TransactionId { get; set; }
        [ForeignKey("FK_UserId")]
        public int UserId { get; set; }
        public string Description { get; set; }
        public decimal Amount { get; set; }
        public AccountTypes AccountType { get; set; }
        public DateTime TransactionDate { get; set; }
    }
}
