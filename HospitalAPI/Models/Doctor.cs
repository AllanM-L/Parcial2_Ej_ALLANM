namespace HospitalAPI.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text.Json.Serialization;
    [Table("Doctores")]
    public class Doctor
    {
        [Key]
        [Column("doctor_id")]
        public int DoctorId { get; set; }

        [Column("nombre")]
        public string? Nombre { get; set; }

        [Column("apellido")]
        public string? Apellido { get; set; }

        [Column("especialidad")]
        public string? Especialidad { get; set; }

        [Column("telefono")]
        public string? Telefono { get; set; }

        [JsonIgnore]
        public ICollection<Cita>? Citas { get; set; }
    }
}
