using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models
{
    public class Person
    {
        [Key]
        public Int32 Id { get; set; }

        [MaxLength(25)]
        public String FirstName { get; set; }

        [MaxLength(50)]
        public String LastName { get; set; }

        [MaxLength(11)]
        public String PersonalNumber { get; set; }

        [Column(TypeName = "date")]
        public DateTime Birthdate { get; set; }

        public Gender Gender { get; set; }

        [Column(TypeName = "money")]
        public Decimal Salary { get; set; }
    }
}
