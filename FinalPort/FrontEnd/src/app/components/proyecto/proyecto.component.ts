import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyec } from 'src/app/models/proyec';
import { ProyecService } from 'src/app/servicios/proyec.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  isLogged = false;

  public proyects:Proyec []=[];
  public editarProyec:Proyec| undefined;
  public eliminarProyec:Proyec | undefined;

  constructor(
    private proyecService:ProyecService,
    private router: Router,
    private tokenService: TokenService
    ) { }

    ngOnInit(): void {
      this.verProyec();
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
  
    public verProyec(): void {
      this.proyecService.verProyec().subscribe((data) => {
        this.proyects = data;
      });
    }
  
    public onEliminarProyec(idProyectos: number): void {
      this.proyecService.eliminarProyec (idProyectos).subscribe({
        next: (response: void) => {
          alert('Se elimino correctamente');
          this.router.navigate(['']);

         console.log(JSON.stringify(idProyectos));
        },
        
        error: (error: HttpErrorResponse) => {
          alert('No se pudo eliminar');
          this.router.navigate(['']);
        },
      });
    }
}
