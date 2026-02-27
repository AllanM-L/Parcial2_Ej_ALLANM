namespace HospitalAPI.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text.Json.Serialization;
    [Table("Pacientes")]
    public class Paciente
    {
        [Key]
        [Column("paciente_id")]
        public int PacienteId { get; set; }

        [Column("nombre")]
        public string? Nombre { get; set; }

        [Column("apellido")]
        public string? Apellido { get; set; }

        [Column("fecha_nacimiento")]
        public DateTime FechaNacimiento { get; set; }

        [Column("telefono")]
        public string? Telefono { get; set; }

        [JsonIgnore]
        public ICollection<Cita>? Citas { get; set; }
    }
}
