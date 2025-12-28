using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Smart_School.Models
{ 
  public class Subject
    {
        [Key]
        public int SubjectId { get; set; }

        [Required(ErrorMessage = "Subject name is required")]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Subject name must be between 2 and 100 characters")]
        public string SubjectName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Class is required")]
        [ForeignKey(nameof(Classes))]
        public int ClassId { get; set; }

        [Required(ErrorMessage = "Teacher is required")]
        [ForeignKey(nameof(Teacher))]
        public int TeacherId { get; set; }

        // Navigation properties
        public Classes? Classes { get; set; }
        public Teacher? Teacher { get; set; }
    }

}