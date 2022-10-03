import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { AcercaDeService } from 'src/app/servicios/acercaDe.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  isLogged= false;

    public persona:Persona | undefined;
    public editarPersona:Persona | undefined;

  constructor(
    private acercaDeservice : AcercaDeService,
    private tokenService: TokenService,
    private router:Router
    ) {}

  ngOnInit(): void {
  this.verPersona();
  if(this.tokenService.getToken()){
    this.isLogged=true;
  }else{
    this.isLogged=false;
  }

  }

  login(){
    this.router.navigate(['/login'])
  }
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  public verPersona():void {
    this.acercaDeservice.verPersona().subscribe({
      next: (Response:Persona) =>{
        this.persona =Response;
      },

    error:(error:HttpErrorResponse) =>{
      alert(error.message);
    }
    })
  }


}