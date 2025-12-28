namespace Smart_School.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    public class Classes
    {
        [Key]
        public int ClassId { get; set; }

        public string ClassName { get; set; }
        public string Section { get; set; }
        public string AcademicYear { get; set; }
    }

}
