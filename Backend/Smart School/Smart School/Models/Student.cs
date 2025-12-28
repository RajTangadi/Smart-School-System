using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Smart_School.Models
{

    public class Student
    {
        [Key]
        public long StudentId { get; set; }

        [ForeignKey("User")]
        public long UserId { get; set; }

        public string RollNo { get; set; }

        [ForeignKey("Class")]
        public long ClassId { get; set; }

        public string ParentName { get; set; }
        public string ParentEmail { get; set; }
        public string ParentPhone { get; set; }
        public string Address { get; set; }
        public DateTime AdmissionDate { get; set; }

        // Navigation
        public User User { get; set; }
        public Class Class { get; set; }
    }
}