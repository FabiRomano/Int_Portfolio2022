import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from 'src/app/models/education';

@Injectable({
  providedIn: 'root'
})

export class EducationService {
  private apiServerUrl=environment.apiBaseUrl;
 
  constructor(private http: HttpClient) { }

public getEducation():Observable<Education[]>{
    return this.http.get<Education[]>(`${this.apiServerUrl}/educacion/todo`);
  }

public addEducation(education:Education):Observable<Education[]>{
    return this.http.post<Education[]>(`${this.apiServerUrl}/educacion/agregar`, education);
}

public updateEducation(education:Education):Observable<Education[]>{
  return this.http.put<Education[]>(`${this.apiServerUrl}/educacion/editar`, education);
}

public deleteEducation(educationId:number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/educacion/eliminar/${educationId}`);
}

public buscarEducacion(idEdu: number):Observable<Education>{
  return this.http.get<Education>(`${this.apiServerUrl}/educacion/buscar/${idEdu}`);
}


}
