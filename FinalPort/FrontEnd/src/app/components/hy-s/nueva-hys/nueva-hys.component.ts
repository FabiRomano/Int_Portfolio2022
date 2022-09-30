import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-nueva-hys',
  templateUrl: './nueva-hys.component.html',
  styleUrls: ['./nueva-hys.component.css']
})
export class NuevaHysComponent implements OnInit {

  nombreSkills:string= '';
  porcentajeSkills:any ='';
  fotoSkills:string='';

  constructor(private skillsService:SkillsService, private router:Router) { }

  ngOnInit(): void {
  }

  onCrearSkills():void{
    const skills=new Skills(this.nombreSkills, this.porcentajeSkills, this.fotoSkills);
    this.skillsService.agregarSkills(skills).subscribe(
      data=>{
        alert("Nueva habilidad añadida");
        this.router.navigate(['/hys']);

        console.log(JSON.stringify(skills));

    },err =>{
      alert("la operacion fallo");
      this.router.navigate(['']);
    }
    )
  }


}
