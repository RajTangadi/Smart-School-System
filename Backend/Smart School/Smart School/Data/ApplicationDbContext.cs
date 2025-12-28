using Microsoft.EntityFrameworkCore;
using Smart_School.Models;

namespace Smart_School.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // =========================
        // DbSets
        // =========================

        // Users
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

        // =========================
        // Model Configuration
        // =========================
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // -------------------------------------------------
            // USER ↔ STUDENT (1 : 1)
            // -------------------------------------------------
            modelBuilder.Entity<User>()
                .HasOne(u => u.Student)
                .WithOne(s => s.User)
                .HasForeignKey<Student>(s => s.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // -------------------------------------------------
            // USER ↔ TEACHER (1 : 1)
            // -------------------------------------------------
            modelBuilder.Entity<User>()
                .HasOne(u => u.Teacher)
                .WithOne(t => t.User)
                .HasForeignKey<Teacher>(t => t.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // -------------------------------------------------
            // CLASS ↔ STUDENTS (1 : M)
            // -------------------------------------------------
            modelBuilder.Entity<Classes>()
                .HasMany<Student>()
                .WithOne(s => s.Class)
                .HasForeignKey(s => s.ClassId)
                .OnDelete(DeleteBehavior.Restrict);

            // -------------------------------------------------
            // CLASS ↔ SUBJECTS (1 : M)
            // -------------------------------------------------
            modelBuilder.Entity<Classes>()
                .HasMany<Subject>()
                .WithOne(s => s.Classes)
                .HasForeignKey(s => s.ClassId)
                .OnDelete(DeleteBehavior.Restrict);

            // -------------------------------------------------
            // TEACHER ↔ SUBJECTS (1 : M)
            // -------------------------------------------------
            modelBuilder.Entity<Teacher>()
                .HasMany<Subject>()
                .WithOne(s => s.Teacher)
                .HasForeignKey(s => s.TeacherId)
                .OnDelete(DeleteBehavior.Restrict);

            // -------------------------------------------------
            // ATTENDANCE
            // -------------------------------------------------
            modelBuilder.Entity<Attendance>()
                .HasOne(a => a.Student)
                .WithMany()
                .HasForeignKey(a => a.StudentId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Attendance>()
                .HasOne(a => a.Class)
                .WithMany()
                .HasForeignKey(a => a.ClassId)
                .OnDelete(DeleteBehavior.Restrict);

            // Unique attendance per student per day
            modelBuilder.Entity<Attendance>()
                .HasIndex(a => new { a.StudentId, a.AttendanceDate })
                .IsUnique();

            // -------------------------------------------------
            // RESULTS
            // -------------------------------------------------
            modelBuilder.Entity<Result>()
                .HasOne(r => r.Student)
                .WithMany()
                .HasForeignKey(r => r.StudentId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Result>()
                .HasOne(r => r.Subject)
                .WithMany()
                .HasForeignKey(r => r.SubjectId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Result>()
                .HasOne(r => r.Exam)
                .WithMany()
                .HasForeignKey(r => r.ExamId)
                .OnDelete(DeleteBehavior.Restrict);

            // -------------------------------------------------
            // FEES & PAYMENTS
            // -------------------------------------------------
            modelBuilder.Entity<Fees>()
                .HasOne(f => f.Student)
                .WithMany()
                .HasForeignKey(f => f.StudentId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Payment>()
                .HasOne(p => p.Student)
                .WithMany()
                .HasForeignKey(p => p.StudentId)
                .OnDelete(DeleteBehavior.Restrict);

            // -------------------------------------------------
            // HOMEWORK
            // -------------------------------------------------
            modelBuilder.Entity<Homework>()
                .HasOne(h => h.Classes)
                .WithMany()
                .HasForeignKey(h => h.ClassId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Homework>()
                .HasOne(h => h.Subject)
                .WithMany()
                .HasForeignKey(h => h.SubjectId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Homework>()
                .HasOne(h => h.Teacher)
                .WithMany()
                .HasForeignKey(h => h.TeacherId)
                .OnDelete(DeleteBehavior.Restrict);

            // -------------------------------------------------
            // ENUMS AS STRING
            // -------------------------------------------------
            modelBuilder.Entity<User>()
                .Property(u => u.Role)
                .HasConversion<string>();

            modelBuilder.Entity<Attendance>()
                .Property(a => a.Status)
                .HasConversion<string>();

            modelBuilder.Entity<Payment>()
                .Property(p => p.Status)
                .HasConversion<string>();

            modelBuilder.Entity<Fees>()
                .Property(f => f.Status)
                .HasConversion<string>();
        }
    }
}
