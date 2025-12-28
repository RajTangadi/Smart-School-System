using Smart_School.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Smart_School.Models
{
    public class Notifications
    {
        [Key]
        public int NotificationId { get; set; }

        [Required]
        public int StudentId { get; set; }

        [ForeignKey("StudentId")]
        public Student Student { get; set; }

        [Required]
        public int AttendanceId { get; set; }

        [ForeignKey("AttendanceId")]
        public Attendance Attendance { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public string Message { get; set; }

        [Required]
        public NotificationType Type { get; set; }

        [Required]
        public NotificationStatus Status { get; set; }
    }
}
