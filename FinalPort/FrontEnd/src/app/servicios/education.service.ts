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

public verEducation():Observable<Education[]>{
    return this.http.get<Education[]>(`${this.apiServerUrl}/educacion/todo`);
  }

public agregarEducation(education:Education):Observable<Education>{
    return this.http.put<Education>(`${this.apiServerUrl}/educacion/agregar`, education);
}

public editarEducation(education:Education):Observable<Education>{
  return this.http.put<Education>(`${this.apiServerUrl}/educacion/editar`, education);
}

public eliminarEducation(educationId:number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/educacion/eliminar/${educationId}`);
}

public buscarEducation(idEdu: number):Observable<Education>{
  return this.http.get<Education>(`${this.apiServerUrl}/educacion/buscar/${idEdu}`);
}


}
