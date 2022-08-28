import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/servicios/education.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educations:Education []=[];
  public editEducation:Education | undefined;
  public deleteEducation:Education | undefined;

  constructor(private educationService:EducationService) { }

  ngOnInit(): void {
    this.getEducations();
  }

  public getEducations():void{
    this.educationService.getEducation().subscribe({
      next: (response: Education[]) =>{
        this.educations=response;
      },
      error:(error: HttpErrorResponse)=>{
        alert (error.message);
      }
            
    })
  }

  public onOpenModel(mode:string, education?:Education):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal')
    if(mode==='add'){
      button.setAttribute('data-target','addEducationModal');
    }
    else if(mode==='delete'){
      this.deleteEducation=education;
      button.setAttribute('data-target','#deleteEducationModal');
    }
    else if(mode==='edit'){
      this.editEducation=education;
      button.setAttribute('data-target','#editEducationModal');
    }

    container?.appendChild(button);
    button.click;
}
public onAddEducation(addForm:NgForm){
   document.getElementById('add-education-form')?.click();
   this.educationService.addEducation(addForm.value).subscribe({
    next: (response: Education[]) =>{
      console.log(response);
      this.educations=response;
      addForm.resetForm();
    },
    error: (error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.resetForm();
    }
})
}
public onpdateEducation(education:Education){
  this.editEducation=education
  document.getElementById('add-education-form')?.click();
  this.educationService.updateEducation(education).subscribe({
   next: (response: Education[]) =>{
     console.log(response);
     this.getEducations ();
   },
   error: (error:HttpErrorResponse)=>{
    alert(error.message);
  }
   })
}

public onDeleteEducation(idEdu:number):void{
 
  this.educationService.deleteEducation(idEdu).subscribe({
   next: (response: void) =>{
     console.log(response);
     this.getEducations ();
   },
   error: (error:HttpErrorResponse)=>{
    alert(error.message);
  }
   })
  }
}