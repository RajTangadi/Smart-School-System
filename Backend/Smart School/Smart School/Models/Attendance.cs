using Smart_School.Enums;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Claims;

namespace Smart_School.Models
{
    public class Attendance
    {
        //[Key]
        //public int AttendanceId { get; set; }

        //[Required]
        //public int StudentId { get; set; }

        //[ForeignKey("StudentId")]
        //public Student Student { get; set; }


        //[Required]
        //public int ClassId { get; set; }

        //[ForeignKey("ClassId")]
        //public Class Class { get; set; }

        //[Required]
        //public DateTime AttendanceDate { get; set; }

        //[Required]
        //public AttendanceStatus Status { get; set; }

        //public int? MarkedByTeacherId { get; set; }

        //[ForeignKey("MarkedByTeacherId")]
        //public Teacher MarkedBy { get; set; }

        //// Navigation property to notifications
        //public ICollection<Notifications> Notifications { get; set; } = new List<Notifications>();

        //===========================================================================================
        [Key]
        public long AttendanceId { get; set; }

        // 🔗 Student Relation
        public long StudentId { get; set; }
        public Student Student { get; set; }

        // 🔗 Class Relation
        public long ClassId { get; set; }
        public Class Class { get; set; }

        public DateTime Date { get; set; }
        [ForeignKey("ClassId")]
        public int ClassId { get; set; }

        public Classes Class { get; set; }

        [Required]
        public DateTime AttendanceDate { get; set; }

        public AttendanceStatus Status { get; set; }

        // Teacher who marked attendance
        public long MarkedBy { get; set; }   // TeacherId

        // 🔗 Notifications (One Attendance → Many Notifications)
        public ICollection<Notifications> Notification{ get; set; }
            = new List<Notifications>();

        // Navigation property to notifications
        public ICollection<Notifications> Notifications { get; set; } = new List<Notifications>();

    }
}
