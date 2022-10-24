import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyec } from 'src/app/models/proyec';
import { ProyecService } from 'src/app/servicios/proyec.service';

@Component({
  selector: 'app-nuevos-proyectos',
  templateUrl: './nuevos-proyectos.component.html',
  styleUrls: ['./nuevos-proyectos.component.css']
})
export class NuevosProyectosComponent implements OnInit {

  nombreProyectos: string='';
  inicioProyectos:string='';
  finProyectos: string='';
  descripcionProyectos:string='';
  urlProyectos:string='';


  constructor(
    private proyecService : ProyecService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onAgregarProyec():void{
    const proyec=new Proyec(this.nombreProyectos, this.inicioProyectos, this.  finProyectos,
     this.descripcionProyectos, this.urlProyectos);
    this.proyecService.agregarProyec(proyec).subscribe(
      data=>{
        alert("Nuevo Proyecto añadido");
        this.router.navigate(['/proyecto']);

        console.log(JSON.stringify (proyec));

    },err =>{
      alert("la operacion fallo");
      this.router.navigate(['']);
    }
    )
  }
}
