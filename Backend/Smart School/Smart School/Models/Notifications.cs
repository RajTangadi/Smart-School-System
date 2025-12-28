using Smart_School.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Smart_School.Models
{
    public class Notifications
    {
        //[Key]
        //public int NotificationId { get; set; }

        //[Required]
        //public int AttendanceId { get; set; }

        //[Required]
        //public NotificationType NotificationType { get; set; }

        //[Required]
        //public string Message { get; set; }

        //public string RecipientEmail { get; set; }
        //public string RecipientPhone { get; set; }

        //public bool IsSent { get; set; }

        //public DateTime SentAt { get; set; }

        //// Navigation Property
        //[ForeignKey("AttendanceId")]
        //public Attendance Attendance { get; set; }



        //===========================================================================================
        [Key]
        public long NotificationId { get; set; }

        // 🔗 Attendance Relation
        public long AttendanceId { get; set; }
        public Attendance Attendance { get; set; }

        // 🔗 Student Relation
        public long StudentId { get; set; }
        public Student Student { get; set; }

        public DateTime Date { get; set; }

        public string Message { get; set; }

        public NotificationType Type { get; set; }   // EMAIL / SMS

        public NotificationStatus Status { get; set; }   // SENT / FAILED
    }
}
