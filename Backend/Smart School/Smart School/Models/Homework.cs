using Smart_School.Models;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Homework
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int HomeworkId { get; set; }

    [Required(ErrorMessage = "Class is required")]
    [ForeignKey("Class")]
    public int ClassId { get; set; }

    [Required(ErrorMessage = "Subject is required")]
    [ForeignKey("Subject")]
    public int SubjectId { get; set; }

    [Required(ErrorMessage = "Description is required")]
    [StringLength(500, MinimumLength = 5,
        ErrorMessage = "Description must be between 5 and 500 characters")]
    public string Description { get; set; }

    [Required(ErrorMessage = "Upload date is required")]
    [DataType(DataType.DateTime)]
    public DateTime UploadDate { get; set; }

    [Required(ErrorMessage = "Teacher is required")]
    [ForeignKey("Teacher")]
    public int TeacherId { get; set; }

    // Navigation properties
    public Classes Classes { get; set; }
    public Subject Subject { get; set; }
    public Teacher Teacher { get; set; }
}
