import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  isLogged = false;

  public experiences :Experience[] =[];
  public editarExperience:Experience| undefined;
  public eliminarExperience:Experience | undefined;
 


  constructor(private experienceService : ExperienceService,
              private router : Router,
              private tokenService : TokenService ) { }

  ngOnInit(): void {
    this.verExperience();
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

   public verExperience(): void {
    this.experienceService.verExperience().subscribe(data=>{
      this.experiences=data;})
  }
  
  public onEliminarExperience(idExp:number):void{
    this.experienceService.eliminarExperience(idExp).subscribe({
      next:(response:void)=>{
        alert("Se elimino correctamente el elemento");
        this.router.navigate(['']);

        console.log(JSON.stringify(idExp));       
      },
      
      error:(error:HttpErrorResponse)=>{
      alert('No se pudo eliminar elemento');
      this.router.navigate(['']);
      }
    })
  


}
}
