import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private apiUrl = 'https://localhost:7086/api/Citas';

  constructor(private http: HttpClient) {}

    getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.apiUrl);
    }
    createCita(cita: any) {
    return this.http.post(this.apiUrl, cita);
    }

    updateCita(id: number, cita: any) {
    return this.http.put(`${this.apiUrl}/${id}`, cita);
    }

    deleteCita(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
