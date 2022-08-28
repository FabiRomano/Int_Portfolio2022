import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyec } from 'src/app/models/proyec';
import { ProyecService } from 'src/app/servicios/proyec.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  public proyects:Proyec []=[];
  public editProyec:Proyec| undefined;
  public deleteProyec:Proyec | undefined;

  constructor(private proyecService:ProyecService) { }

  ngOnInit(): void {
    this.getProyects();
  }

  public getProyects():void{
    this.proyecService.getProyec().subscribe({
      next: (response: Proyec[]) =>{
        this.proyects=response;
      },
      error:(error: HttpErrorResponse)=>{
        alert (error.message);
      }
            
    })
  }
  public onOpenModel(mode:string, proyec?:Proyec):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal')
    if(mode==='add'){
      button.setAttribute('data-target','addProyecModal');
    }
    else if(mode==='delete'){
      this.deleteProyec=proyec;
      button.setAttribute('data-target','#deleteProyecModal');
    }
    else if(mode==='edit'){
      this.editProyec=proyec;
      button.setAttribute('data-target','#editExperienceModal');
    }

    container?.appendChild(button);
    button.click;
  }

  public onAddProyec(addForm:NgForm){
   document.getElementById('add-proyec-form')?.click();
   this.proyecService.addProyec(addForm.value).subscribe({
    next: (response: Proyec[]) =>{
      console.log(response);
      this.proyects=response;
      addForm.resetForm();
    },
    error: (error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.resetForm();
    }
})
}
public onpdateProyec(proyec:Proyec){
  this.editProyec=proyec
  document.getElementById('add-proyec-form')?.click();
  this.proyecService.updateProyec(proyec).subscribe({
   next: (response: Proyec[]) =>{
     console.log(response);
     this.getProyects ();
   },
   error: (error:HttpErrorResponse)=>{
    alert(error.message);
  }
   })
}

public onDeleteProyec(idPro:number):void{
 
  this.proyecService.deleteProyec(idPro).subscribe({
   next: (response: void) =>{
     console.log(response);
     this.getProyects ();
   },
   error: (error:HttpErrorResponse)=>{
    alert(error.message);
  }
   })
  }
}
