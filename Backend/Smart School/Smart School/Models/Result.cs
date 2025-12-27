using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Smart_School.Models
{
    public class Result
    {
        [Key]
        public long ResultId { get; set; }

        [Required(ErrorMessage = "Student is required")]
        [ForeignKey("Student")]
        public long StudentId { get; set; }

        [Required(ErrorMessage = "Subject is required")]
        [ForeignKey("Subject")]
        public long SubjectId { get; set; }

        [Required(ErrorMessage = "Exam is required")]
        [ForeignKey("Exam")]
        public long ExamId { get; set; }

        [Required(ErrorMessage = "Marks are required")]
        [Range(0, 100, ErrorMessage = "Marks must be between 0 and 100")]
        public int Marks { get; set; }
   
        public string Grade { get; set; }

        public Student Student { get; set; }
        public Subject Subject { get; set; }
        public Exam Exam { get; set; }
    }
}
