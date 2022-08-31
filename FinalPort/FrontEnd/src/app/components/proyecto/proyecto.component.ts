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
