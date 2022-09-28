import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUsuario } from '../models/login-usuarios';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiServerUrl=environment.apiBaseUrl;

  constructor(private HttpClient :HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario):Observable<any>{
    return this.HttpClient.post<any>(`${this.apiServerUrl}/login/nuevo`,nuevoUsuario);
  }
  public login (loginUsuario: LoginUsuario):Observable<any>{
    return this.HttpClient.post<any>(`${this.apiServerUrl}/login`,loginUsuario);
  }


}
