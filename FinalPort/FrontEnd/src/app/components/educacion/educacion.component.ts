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