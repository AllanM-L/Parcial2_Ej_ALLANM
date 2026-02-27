import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CitasService } from '../services/citas.service';
import { PacientesService } from '../services/pacientes.service';
import { DoctoresService } from '../services/doctores.service';
import { Cita } from '../models/cita';
import { Paciente } from '../models/paciente';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './citas.html'
})
export class CitasComponent implements OnInit {

  citas: Cita[] = [];
  pacientes: Paciente[] = [];
  doctores: Doctor[] = [];

  modoEdicion = false;

  nuevaCita: any = {
    citaId: 0,
    pacienteId: '',
    doctorId: '',
    fechaCita: '',
    motivo: ''
  };

  constructor(
    private citasService: CitasService,
    private pacientesService: PacientesService,
    private doctoresService: DoctoresService
  ) {}

  ngOnInit(): void {
    this.cargarTodo();
  }

  cargarTodo() {
    this.citasService.getCitas().subscribe(data => this.citas = data);
    this.pacientesService.getPacientes().subscribe(data => this.pacientes = data);
    this.doctoresService.getDoctores().subscribe(data => this.doctores = data);
  }

  guardarCita() {

    if (this.modoEdicion) {
      this.citasService.updateCita(this.nuevaCita.citaId, this.nuevaCita)
        .subscribe(() => {
          this.resetFormulario();
          this.cargarTodo();
        });
    } else {
      this.citasService.createCita(this.nuevaCita)
        .subscribe(() => {
          this.resetFormulario();
          this.cargarTodo();
        });
    }
  }

  editarCita(cita: Cita) {
    this.modoEdicion = true;
    this.nuevaCita = { ...cita };
  }

  eliminarCita(id: number) {
    this.citasService.deleteCita(id)
      .subscribe(() => this.cargarTodo());
  }

  resetFormulario() {
    this.modoEdicion = false;
    this.nuevaCita = {
      citaId: 0,
      pacienteId: '',
      doctorId: '',
      fechaCita: '',
      motivo: ''
    };
  }
}
