using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Smart_School.Models
{
    public class Payment
    {
        [Key]
        public long PaymentId { get; set; }

        [Required(ErrorMessage = "Student is required")]
        [ForeignKey("Student")]
        public long StudentId { get; set; }

        [Required(ErrorMessage = "Payment amount is required")]
        [Range(1, double.MaxValue, ErrorMessage = "Amount must be greater than 0")]
        public double Amount { get; set; }

        [Required(ErrorMessage = "Payment date is required")]
        [DataType(DataType.Date)]
        public DateTime PaymentDate { get; set; }

        [Required(ErrorMessage = "Payment mode is required")]
        public PaymentMode PaymentMode { get; set; }

        [StringLength(100, ErrorMessage = "Transaction ID cannot exceed 100 characters")]
        public string? TransactionId { get; set; }

        [Required(ErrorMessage = "Payment status is required")]
        public PaymentStatus Status { get; set; }

        // Navigation Property
        public Student Student { get; set; }
    }
}
