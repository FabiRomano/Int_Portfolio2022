import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyec } from 'src/app/models/proyec';
import { ProyecService } from 'src/app/servicios/proyec.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  public proyec: Proyec[] = [];
  proyecto: Proyec = (null as any);
 public editarProyec:Proyec | undefined;

 constructor(
   private proyecService: ProyecService,
   private activatedRouter: ActivatedRoute,
   private router: Router
 ) {}

 ngOnInit(): void {
   const id = this.activatedRouter.snapshot.params['idProyec'];
   this.proyecService.buscarProyec(id).subscribe(
     (data) => {
       this.proyecto = data;
       
     },
     (err) => {
       alert('No se recibio ninguna id');
       this.router.navigate(['']);
     }
   );
 }

 public onEditarProyec(): void {
   this.proyecService.editarProyec(this.proyecto).subscribe({
     next: (response: Proyec) => {
     
       this.router.navigate(['']);

       console.log(this.proyecto);

     },
     error: (error: HttpErrorResponse) => {
       alert('No se pudo modificar correctamente');
     },
   });
 }
}
