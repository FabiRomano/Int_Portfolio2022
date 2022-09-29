import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-hy-s',
  templateUrl: './hy-s.component.html',
  styleUrls: ['./hy-s.component.css']
})
export class HySComponent implements OnInit {
  isLogged= false;
  public skills:Skills[]=[];
  public editarSkills:Skills|undefined;
  public eliminarSkills:Skills|undefined;

  constructor(private skillsService:SkillsService, 
              private router:Router,
              private tokenService: TokenService
              ) { }

  ngOnInit(): void {

    this.verSkills();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

  }

  

  public verSkills(): void {
    this.skillsService.verSkills().subscribe(data=>{this.skills=data;})
  }
  
  public onEliminarSkills(idSki:number):void{
    this.skillsService.eliminarSkills(idSki).subscribe({
      next:(response:void)=>{
        alert("Se elimino correctamente el elemento");
        this.router.navigate(['']);
               
      },
      error:(error:HttpErrorResponse)=>{
      alert('No se pudo eliminar elemento');
      this.router.navigate(['']);
      }
    })
  }
 
  }
