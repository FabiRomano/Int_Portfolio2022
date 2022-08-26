import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudios } from '../models/estudios';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiServerUrl=environment.apiBaseUrl;
 
  constructor(private http: HttpClient) { }

public getEducation():Observable<Estudios[]>{
    return this.http.get<Estudios[]>(`${this.apiServerUrl}/estudios/all`);
  }

public addEstudios(estudios:Estudios):Observable<Estudios[]>{
    return this.http.post<Estudios[]>(`${this.apiServerUrl}/estudios/add`, estudios);
}

public updateEstudios(estudios:Estudios):Observable<Estudios[]>{
  return this.http.put<Estudios[]>(`${this.apiServerUrl}/estudios/update`, estudios);
}

public deleteEstudios(estudiosId:number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/estudios/delete/${estudiosId}`);
}

}
