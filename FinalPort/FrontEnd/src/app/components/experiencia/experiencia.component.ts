import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiences :Experience[] =[];
  public editExperience:Experience| undefined;
  public deleteExperience:Experience | undefined;


  constructor(private experienceService : ExperienceService) { }

  ngOnInit(): void {
    this.getExperiences();
  }

  public getExperiences():void{
    this.experienceService.getExperience().subscribe({
      next: (response: Experience[]) => {
      this.experiences=response;
    },
    error:(error: HttpErrorResponse)=>{
      alert (error.message);
    }
    });
  }
 
 public onDeleteExperience(idExp:number):void{
  
   this.experienceService.deleteExperience(idExp).subscribe({
    next: (response: void) =>{
      console.log(response);
      this.getExperiences ();
    },
    error: (error:HttpErrorResponse)=>{
     alert(error.message);
   }
    })
   }

}
