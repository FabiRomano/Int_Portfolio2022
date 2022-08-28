import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyec } from 'src/app/models/proyec';
import { ProyecService } from 'src/app/servicios/proyec.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  public proyects:Proyec []=[];

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

}
