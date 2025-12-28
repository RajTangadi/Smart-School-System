using Smart_School.Enums;
using Smart_School.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Fees
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int FeeId { get; set; }

    [Required(ErrorMessage = "Student is required")]
    [ForeignKey("Student")]
    public int StudentId { get; set; }

    [Required(ErrorMessage = "Total amount is required")]
    [Range(0, double.MaxValue, ErrorMessage = "Total amount must be greater than or equal to 0")]
    [Column(TypeName = "decimal(18,2)")]
    public decimal TotalAmount { get; set; }

    [Required(ErrorMessage = "Paid amount is required")]
    [Range(0, double.MaxValue, ErrorMessage = "Paid amount must be greater than or equal to 0")]
    [Column(TypeName = "decimal(18,2)")]
    public decimal PaidAmount { get; set; }

    [Required(ErrorMessage = "Due amount is required")]
    [Range(0, double.MaxValue, ErrorMessage = "Due amount must be greater than or equal to 0")]
    [Column(TypeName = "decimal(18,2)")]
    public decimal DueAmount { get; set; }

    [Required]
    public FeeStatus Status { get; set; }

    // Navigation property
    public Student Student { get; set; }
}
