import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-editar-hys',
  templateUrl: './editar-hys.component.html',
  styleUrls: ['./editar-hys.component.css']
})
export class EditarHysComponent implements OnInit {

  public skills: Skills[] = [];
  ski: Skills =  (null as any);
  public editarSkills: Skills | undefined;

  constructor(
    private skillsService: SkillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['idSki'];
    this.skillsService.buscarSkills(id).subscribe(
      (data) => {
        this.ski = data;

        console.log(this.ski);
      },
      (err) => {
        alert('No se recibio ninguna id');
        this.router.navigate(['']);
      }
    );
  }

  public onEditarSkills(): void {
    this.skillsService.editarSkills(this.ski).subscribe({
      next: (response: Skills) => {
      
        this.router.navigate(['']);

        console.log();
      },
      error: (error: HttpErrorResponse) => {
        alert('No se pudo modificar');
      },
    });
  }

}
