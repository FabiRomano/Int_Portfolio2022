import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyec } from '../models/proyec';

@Injectable({
  providedIn: 'root'
})
export class ProyecService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public verProyec():Observable<Proyec[]>{
    return this.http.get<Proyec[]>(`${this.apiServerUrl}/proyectos/todo`);
  }

  public agregarProyec(proyec:Proyec):Observable<Proyec[]>{
    return this.http.put<Proyec[]>(`${this.apiServerUrl}/proyectos/agregar`, proyec);
  }

  public editarProyec(proyec:Proyec):Observable<Proyec[]>{
  return this.http.put<Proyec[]>(`${this.apiServerUrl}/Proyectos/editar`, proyec);
  }

  public eliminarProyec(proyecId:number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/proyectos/eliminar/${proyecId}`);
  }

  
  public buscarProyec(idProyec: number):Observable<Proyec>{
    return this.http.get<Proyec>(`${this.apiServerUrl}/proyectos/buscar/${idProyec}`);
  }

}
