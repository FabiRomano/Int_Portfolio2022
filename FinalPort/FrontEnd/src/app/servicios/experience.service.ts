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
      return this.http.get<Experience[]>(`${this.apiServerUrl}/experiencia/all`);
    }

    public addExperiece(experience:Experience):Observable<Experience[]>{
      return this.http.post<Experience[]>(`${this.apiServerUrl}/experiencia/add`, experience);
    }

    public updateExperience(experience:Experience):Observable<Experience[]>{
    return this.http.put<Experience[]>(`${this.apiServerUrl}/experiencia/update`, experience);
    }

    public deleteExperience(experienceId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/experiencia/delete/${experienceId}`);
    }

}