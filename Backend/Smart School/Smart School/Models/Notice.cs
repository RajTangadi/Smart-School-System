using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Notice
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int NoticeId { get; set; }

    [Required(ErrorMessage = "Title is required")]
    [StringLength(150, MinimumLength = 3,
        ErrorMessage = "Title must be between 3 and 150 characters")]
    public string Title { get; set; }

    [Required(ErrorMessage = "Description is required")]
    [StringLength(1000, MinimumLength = 5,
        ErrorMessage = "Description must be between 5 and 1000 characters")]
    public string Description { get; set; }

    [Required(ErrorMessage = "Created By is required")]
    [StringLength(50, ErrorMessage = "Created By cannot exceed 50 characters")]
    public string CreatedBy { get; set; } // Admin / Teacher

    [Required]
    [DataType(DataType.DateTime)]
    public DateTime CreatedAt { get; set; }
}
