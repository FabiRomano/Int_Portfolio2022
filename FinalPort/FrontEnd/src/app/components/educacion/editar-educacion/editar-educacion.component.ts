import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/servicios/education.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  public education: Education[] = [];
   educacion: Education = (null as any);
  public editarEducation: Education | undefined;

  constructor(
    private educationService: EducationService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['idEdu'];
    this.educationService.buscarEducation(id).subscribe(
      (data) => {
        this.educacion = data;
        console.log(this.educacion);
      },
      (err) => {
        alert('No se recibio ninguna id');
        this.router.navigate(['']);
      }
    );
  }

  public onEditarEducation(): void {
    this.educationService.editarEducation(this.educacion).subscribe({
      next: (response: Education) => {
      
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert('No se pudo modificar correctamente');
      },
    });
  }

}

