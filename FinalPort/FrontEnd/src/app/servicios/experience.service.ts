import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Experience } from '../models/experience';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }



    public getExperience():Observable<Experience[]>{
      return this.http.get<Experience[]>(`${this.apiServerUrl}/experiencia/todo`);
    }

    public addExperiece(experience:Experience):Observable<Experience[]>{
      return this.http.post<Experience[]>(`${this.apiServerUrl}/experiencia/agregar`, experience);
    }

    public updateExperience(experience:Experience):Observable<Experience[]>{
    return this.http.put<Experience[]>(`${this.apiServerUrl}/experiencia/editar`, experience);
    }

    public deleteExperience(experienceId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/experiencia/eliminar/${experienceId}`);
    }

    public buscarExperience(idExp: number):Observable<Experience>{
      return this.http.get<Experience>(`${this.apiServerUrl}/experiencia/buscar/${idExp}`);
    }

}