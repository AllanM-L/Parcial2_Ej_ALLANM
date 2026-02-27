import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DoctoresService } from '../services/doctores.service';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-doctores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctores.html'
})
export class DoctoresComponent implements OnInit {

  doctores: Doctor[] = [];

  nuevoDoctor: Doctor = {
    doctorId: 0,
    nombre: '',
    apellido: '',
    especialidad: '',
    telefono: ''
  };

  constructor(private doctoresService: DoctoresService) {}

  ngOnInit(): void {
    this.cargarDoctores();
  }

  cargarDoctores() {
    this.doctoresService.getDoctores().subscribe(data => {
      this.doctores = data;
    });
  }

  agregarDoctor() {
    this.doctoresService.createDoctor(this.nuevoDoctor)
      .subscribe(() => {
        this.cargarDoctores();
        this.nuevoDoctor = {
          doctorId: 0,
          nombre: '',
          apellido: '',
          especialidad: '',
          telefono: ''
        };
      });
  }

  eliminarDoctor(id: number) {
    this.doctoresService.deleteDoctor(id)
      .subscribe(() => this.cargarDoctores());
  }
}
