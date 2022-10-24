import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/servicios/education.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  isLogged = false;

  public educations:Education []=[];
  public editarEducation:Education | undefined;
  public eliminarEducation:Education | undefined;

   constructor(
    private educationService:EducationService, 
    private router: Router,
    private tokenService: TokenService
    ) { }
     
      ngOnInit(): void {
      this.verEducations();
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }
    login() {
      this.router.navigate(['/login']);
    }
    onLogOut(): void {
      this.tokenService.logOut();
      window.location.reload();
    }
  
    public verEducations(): void {
      this.educationService.verEducation().subscribe((data) => {
        this.educations = data;
      });
    }
  
    public onEliminarEducation(idEdu: number): void {
      this.educationService.eliminarEducation (idEdu).subscribe({
        next: (response: void) => {
          alert('Se elimino correctamente');
          this.router.navigate(['']);

         // console.log(JSON.stringify(idEdu));
        },
        
        error: (error: HttpErrorResponse) => {
          alert('No se pudo eliminar');
          this.router.navigate(['']);
        },
      });
    }
}