import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY= 'AuthUsername';
const AUTHORITIES_KEY='AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setToken(accesToken:string): void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, accesToken);
  }
  public getToken():string{
    return sessionStorage.getItem(TOKEN_KEY)!;
    
  }
  public setUserName(userName:string):void{
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }
  public getUserName():string{
    return sessionStorage.getItem(USERNAME_KEY)!;    
  }
  public logOut():void{
    window.sessionStorage.clear();
  }
  
}
