import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/servicios/education.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {
  establecimientoEdu: string=' ';
  fechaInicioEdu:string=' ';
  fechaFinEdu: string=' ';
  certificadoEdu: string=' ';
  img: string=' ';

  constructor(
    private educationService : EducationService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  onAgregarEducation():void{
    const education=new Education(this.establecimientoEdu, this.fechaInicioEdu, this.fechaFinEdu, this.certificadoEdu, this.img);
    this.educationService.agregarEducation(education).subscribe(
      data=>{
        alert("Nueva educacion añadida");
        this.router.navigate(['/educacion']);

        console.log(JSON.stringify (education));

    },err =>{
      alert("la operacion fallo");
      this.router.navigate(['']);
    }
    )
  }

}
