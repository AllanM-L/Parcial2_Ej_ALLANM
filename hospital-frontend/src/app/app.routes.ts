import { Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pacientes';
import { DoctoresComponent } from './doctores/doctores';
import { CitasComponent } from './citas/citas';

export const routes: Routes = [
  { path: '', redirectTo: 'pacientes', pathMatch: 'full' },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'doctores', component: DoctoresComponent },
  { path: 'citas', component: CitasComponent }
];
