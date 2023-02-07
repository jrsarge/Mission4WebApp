using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4WebApp.Models
{
    public class GradeCalculatorModel
    {
        //sets up data validation for fields to be required and within 0-100
        public string output { get; set; }

        [Required]
        [Range(0,100.00)]
        public float assignment { get; set; }

        [Required]
        [Range(0, 100.00)]
        public float quiz { get; set; }

        [Required]
        [Range(0, 100.00)]
        public float group { get; set; }

        [Required]
        [Range(0, 100.00)]
        public float intex { get; set; }

        [Required]
        [Range(0, 100.00)]
        public float midterm { get; set; }

        [Required]
        [Range(0, 100.00)]
        public float final { get; set; }
    }
}
