import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
  private apiServerUrl=environment.apiBaseUrl;
  
  constructor(private http: HttpClient) {}

  public verPersona():Observable<Persona> {
     return this.http.get<Persona>(`${this.apiServerUrl}/persona/id/1`);

}

public editarPersona(persona:Persona):Observable<Persona>{
  return this.http.put<Persona>(`${this.apiServerUrl}/persona/editar`, persona);
}

public buscarPersona(id: number):Observable<Persona>{
  return this.http.get<Persona>(`${this.apiServerUrl}/persona/buscar/${id}`);
}

}