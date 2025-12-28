using System.ComponentModel.DataAnnotations;

namespace Smart_School.Models
{
    public class User
    {
        [Key]
        public long UserId { get; set; }

        // 1️⃣ Username must start with a letter (no digit or special char)
        [Required(ErrorMessage = "Username is required")]
        [RegularExpression(
            @"^[A-Za-z][A-Za-z0-9_]{2,29}$",
            ErrorMessage = "Username must start with a letter and contain only letters, numbers, or underscore (3–30 chars)"
        )]
        public string Username { get; set; } = string.Empty;

        // 3️⃣ Password regex validation
        [Required(ErrorMessage = "Password is required")]
        [RegularExpression(
            @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$",
            ErrorMessage = "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
        )]
        public string Password { get; set; } = string.Empty;

        [Required(ErrorMessage = "Role is required")]
        public UserRole Role { get; set; }

        // 2️⃣ Email regex validation
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        [RegularExpression(
            @"^[^@\s]+@[^@\s]+\.[^@\s]+$",
            ErrorMessage = "Invalid email address"
        )]
        public string Email { get; set; } = string.Empty;

        [Phone(ErrorMessage = "Invalid phone number")]
        public string? Phone { get; set; }

        // Navigation properties
        public Student? Student { get; set; }
        public Teacher? Teacher { get; set; }
    }
}
