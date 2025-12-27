using Microsoft.EntityFrameworkCore;
using Smart_School.Models;

namespace Smart_School.Data
{
    public class ApplicationDbContext : DbContext
    {
            public ApplicationDbContext(DbContextOptions options) : base(options)
            {
            }

        // User & Roles
        public DbSet<User> Users { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Teacher> Teachers { get; set; }

        // Academic
        public DbSet<Classes> Classes { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Attendance> Attendances { get; set; }
        public DbSet<Notifications> AttendanceNotifications { get; set; }

        // Exams & Results
        public DbSet<Exam> Exams { get; set; }
        public DbSet<Result> Results { get; set; }

        // Fees & Payments
        public DbSet<Fees> Fees { get; set; }
        public DbSet<Payment> Payments { get; set; }

        // Homework & Notices
        public DbSet<Homework> Homeworks { get; set; }
        public DbSet<Notice> Notices { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            
            // USER ↔ STUDENT (1:1)
         
            modelBuilder.Entity<User>()
                .HasOne(u => u.Student)
                .WithOne(s => s.User)
                .HasForeignKey<Student>(s => s.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            
            // USER ↔ TEACHER (1:1)
           
            modelBuilder.Entity<User>()
                .HasOne(u => u.Teacher)
                .WithOne(t => t.User)
                .HasForeignKey<Teacher>(t => t.UserId)
                .OnDelete(DeleteBehavior.Cascade);

      
            // CLASS ↔ STUDENTS (1:M)
       
            modelBuilder.Entity<Class>()
                .HasMany<Student>()
                .WithOne(s => s.Class)
                .HasForeignKey(s => s.ClassId);

            
            // CLASS ↔ SUBJECTS (1:M)

            modelBuilder.Entity<Class>()
                .HasMany<Subject>()
                .WithOne(s => s.Class)
                .HasForeignKey(s => s.ClassId);

           
            // TEACHER ↔ SUBJECTS (1:M)
           
            modelBuilder.Entity<Teacher>()
                .HasMany<Subject>()
                .WithOne(s => s.Teacher)
                .HasForeignKey(s => s.TeacherId);

           
            // ATTENDANCE
           
            modelBuilder.Entity<Attendance>()
                .HasOne(a => a.Student)
                .WithMany()
                .HasForeignKey(a => a.StudentId);

            modelBuilder.Entity<Attendance>()
                .HasOne(a => a.Class)
                .WithMany()
                .HasForeignKey(a => a.ClassId);

            // Unique attendance per student per day
            modelBuilder.Entity<Attendance>()
                .HasIndex(a => new { a.StudentId, a.Date })
                .IsUnique();

           
            // RESULTS
           
            modelBuilder.Entity<Result>()
                .HasOne(r => r.Student)
                .WithMany()
                .HasForeignKey(r => r.StudentId);

            modelBuilder.Entity<Result>()
                .HasOne(r => r.Subject)
                .WithMany()
                .HasForeignKey(r => r.SubjectId);

            modelBuilder.Entity<Result>()
                .HasOne(r => r.Exam)
                .WithMany()
                .HasForeignKey(r => r.ExamId);

           
            // FEES & PAYMENTS
            
            modelBuilder.Entity<Fee>()
                .HasOne(f => f.Student)
                .WithMany()
                .HasForeignKey(f => f.StudentId);

            modelBuilder.Entity<Payment>()
                .HasOne(p => p.Student)
                .WithMany()
                .HasForeignKey(p => p.StudentId);

         
            // HOMEWORK
          
            modelBuilder.Entity<Homework>()
                .HasOne(h => h.Class)
                .WithMany()
                .HasForeignKey(h => h.ClassId);

            modelBuilder.Entity<Homework>()
                .HasOne(h => h.Subject)
                .WithMany()
                .HasForeignKey(h => h.SubjectId);

            modelBuilder.Entity<Homework>()
                .HasOne(h => h.Teacher)
                .WithMany()
                .HasForeignKey(h => h.TeacherId);

          
            // ENUMS AS STRINGS
           
            modelBuilder.Entity<User>()
                .Property(u => u.Role)
                .HasConversion<string>();

            modelBuilder.Entity<Attendance>()
                .Property(a => a.Status)
                .HasConversion<string>();

            modelBuilder.Entity<Payment>()
                .Property(p => p.Status)
                .HasConversion<string>();

            modelBuilder.Entity<Fee>()
                .Property(f => f.Status)
                .HasConversion<string>();


        }
}
