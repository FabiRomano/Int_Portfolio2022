import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { AcercaDeService } from 'src/app/servicios/acercaDe.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  public persona:Persona[]=[];
  per: Persona = (null as any);
  public editarDescripcion: Persona | undefined;

  constructor(
    private acercaDeService: AcercaDeService,
    private activatedRouter: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.acercaDeService.buscarPersona(id).subscribe(
      (data) => {
        this.per = data;
        console.log(this.per);
      },
      (err) => {
        console.log(this.per);
        alert('No se recibio ninguna id');
        this.router.navigate(['']);
      }
    );

  }
  public onEditarPersona(): void {
    this.acercaDeService.editarPersona(this.per).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert('No se pudo modificar');
      },
    });
  }
}
