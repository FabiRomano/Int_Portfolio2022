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

  public experiences :Experience []=[];
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
  public onOpenModel(mode:string, experience?:Experience):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal')
    if(mode==='add'){
      button.setAttribute('data-target','addExperienceModal');
    }
    else if(mode==='delete'){
      this.deleteExperience=experience;
      button.setAttribute('data-target','#deleteExperienceModal');
    }
    else if(mode==='edit'){
      this.editExperience=experience;
      button.setAttribute('data-target','#editExperienceModal');
    }

    container?.appendChild(button);
    button.click;
  }

  public onAddExperience(addForm:NgForm){
    document.getElementById('add-experience-form')?.click();
    this.experienceService.addExperiece(addForm.value).subscribe({
     next: (response: Experience[]) =>{
       console.log(response);
       this.experiences=response;
       addForm.resetForm();
     },
     error: (error:HttpErrorResponse)=>{
       alert(error.message);
       addForm.resetForm();
     }
 })
 }
 public onpdateExperience(experience:Experience){
   this.editExperience=experience
   document.getElementById('add-experience-form')?.click();
   this.experienceService.updateExperience(experience).subscribe({
    next: (response: Experience[]) =>{
      console.log(response);
      this.getExperiences ();
    },
    error: (error:HttpErrorResponse)=>{
     alert(error.message);
   }
    })
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
