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

  public getProyec():Observable<Proyec[]>{
    return this.http.get<Proyec[]>(`${this.apiServerUrl}/proyectos/todo`);
  }

  public addProyec(proyec:Proyec):Observable<Proyec[]>{
    return this.http.post<Proyec[]>(`${this.apiServerUrl}/proyectos/agregar`, proyec);
  }

  public updateProyec(proyec:Proyec):Observable<Proyec[]>{
  return this.http.put<Proyec[]>(`${this.apiServerUrl}/Proyectos/editar`, proyec);
  }

  public deleteProyec(proyecId:number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/proyectos/eliminar/${proyecId}`);
  }

}
