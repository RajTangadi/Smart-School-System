namespace Smart_School.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Teacher
    {
        [Key]
        public long TeacherId { get; set; }

        [ForeignKey("User")]
        public long UserId { get; set; }

        public string Qualification { get; set; }
        public int Experience { get; set; }
        public DateTime JoiningDate { get; set; }

        // Navigation
        public User User { get; set; }
    }

}
