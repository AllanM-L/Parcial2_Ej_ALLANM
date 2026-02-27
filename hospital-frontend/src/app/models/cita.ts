export interface Cita {
  citaId: number;
  pacienteId: number;
  doctorId: number;
  fechaCita: string;
  motivo: string;

  paciente: {
    pacienteId: number;
    nombre: string;
    apellido: string;
    telefono: string;
  };

  doctor: {
    doctorId: number;
    nombre: string;
    apellido: string;
    especialidad: string;
    telefono: string;
  };
}