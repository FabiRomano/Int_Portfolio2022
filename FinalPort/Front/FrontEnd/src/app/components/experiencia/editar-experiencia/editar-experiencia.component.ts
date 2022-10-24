import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  public experiences: Experience[] = [];
   experiencia: Experience = (null as any);
  public editarExperience: Experience | undefined;

  constructor(
    private experienceService: ExperienceService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['idExp'];
    this.experienceService.buscarExperience(id).subscribe(
      (data) => {
        this.experiencia= data;
       
      },
      (err) => {
        alert('No se recibio ninguna id');
        this.router.navigate(['']);
      }
    );
  }

  public onEditarExperience(): void {
    this.experienceService.editarExperience(this.experiencia).subscribe({
      next: (response: Experience) => {
        console.log(response);
        this.router.navigate(['']);

        //console.log(this.experiencia);
      },
      error: (error: HttpErrorResponse) => {
        alert('No se pudo modificar correctamente');
      },
    });

  }
}
