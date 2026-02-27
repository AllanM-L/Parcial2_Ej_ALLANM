namespace HospitalAPI.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Citas")]
    public class Cita
    {
        [Key]
        [Column("cita_id")]
        public int CitaId { get; set; }

        [Column("paciente_id")]
        public int PacienteId { get; set; }

        public Paciente? Paciente { get; set; }

        [Column("doctor_id")]
        public int DoctorId { get; set; }

        public Doctor? Doctor { get; set; }

        [Column("fecha_cita")]
        public DateTime FechaCita { get; set; }

        [Column("motivo")]
        public string? Motivo { get; set; }
    }
}
