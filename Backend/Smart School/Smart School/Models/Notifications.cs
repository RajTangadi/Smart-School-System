using Smart_School.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Smart_School.Models
{
    public class Notifications
    {
        


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
