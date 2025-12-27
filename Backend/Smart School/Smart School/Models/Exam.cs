using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Smart_School.Models
{
    public class Exam
    {
        [Key]
        public long ExamId { get; set; }

        [Required(ErrorMessage = "Exam name is required")]
        [StringLength(100, ErrorMessage = "Exam name cannot exceed 100 characters")]
        public string ExamName { get; set; }

        [Required(ErrorMessage = "Class is required")]
        [ForeignKey("Class")]
        public long ClassId { get; set; }

        [Required(ErrorMessage = "Exam date is required")]
        [DataType(DataType.Date)]
        public DateTime ExamDate { get; set; }

        // Navigation Property
        public Class Class { get; set; }
    }
}
