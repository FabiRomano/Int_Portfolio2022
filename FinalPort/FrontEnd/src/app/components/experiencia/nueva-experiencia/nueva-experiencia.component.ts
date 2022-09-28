import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  empresaExp: string = '';
  fechaInicioExp:string = '';
  fechaFinExp: string = '';
  descripcionExp: string = '';

  constructor(
    private experienceService : ExperienceService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  onAgregarExperience(): void {
    const experiences = new Experience(
      this.empresaExp,
      this.fechaInicioExp,
      this.fechaFinExp,
      this.descripcionExp,
     
    );
    this.experienceService.agregarExperiece(experiences).subscribe(
      (data) => {
        alert('Nueva Experiencia añadida');
        this.router.navigate(['/experiencia']);

        // console.log(JSON.stringify(experiences));
      },
    
      (err) => {
        alert('la operacion fallo');
        this.router.navigate(['']);
      }
    );
  }
}
