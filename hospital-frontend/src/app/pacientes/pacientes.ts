import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PacientesService } from '../services/pacientes.service';
import { Paciente } from '../models/paciente';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pacientes.html'
})
export class PacientesComponent implements OnInit {

  pacientes: Paciente[] = [];

  nuevoPaciente: Paciente = {
    pacienteId: 0,
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    telefono: ''
  };

  constructor(private pacientesService: PacientesService) {}

  ngOnInit(): void {
    this.cargarPacientes();
  }

  cargarPacientes() {
    this.pacientesService.getPacientes().subscribe(data => {
      this.pacientes = data;
    });
  }

  agregarPaciente() {
    this.pacientesService.createPaciente(this.nuevoPaciente)
      .subscribe(() => {
        this.cargarPacientes();
        this.nuevoPaciente = {
          pacienteId: 0,
          nombre: '',
          apellido: '',
          fechaNacimiento: '',
          telefono: ''
        };
      });
  }

  eliminarPaciente(id: number) {
    this.pacientesService.deletePaciente(id)
      .subscribe(() => this.cargarPacientes());
  }
}
