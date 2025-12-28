namespace Smart_School.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    public class Class
    {
        [Key]
        public long ClassId { get; set; }

        public string ClassName { get; set; }
        public string Section { get; set; }
        public string AcademicYear { get; set; }
    }

}
