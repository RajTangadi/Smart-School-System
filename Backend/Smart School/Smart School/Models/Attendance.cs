using Smart_School.Enums;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Smart_School.Models
{
    public class Attendance
    {
        [Key]
       public int AttendanceId { get; set; }

        [Required]
        public int StudentId { get; set; }

        [ForeignKey("StudentId")]
        public Student Student { get; set; }

        [Required]
        public DateTime AttendanceDate { get; set; }

        [Required]
        public AttendanceStatus Status { get; set; }

        public int? MarkedByTeacherId { get; set; }

        [ForeignKey("MarkedByTeacherId")]
        public Teacher MarkedBy { get; set; }

        // Navigation property to notifications
        public ICollection<Notifications> Notifications { get; set; } = new List<Notifications>();
    }
}
