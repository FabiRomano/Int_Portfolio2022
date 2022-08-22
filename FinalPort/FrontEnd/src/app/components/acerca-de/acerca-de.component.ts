import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
    public persona:Persona | undefined;
    public editPersona:Persona | undefined;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
  this.getPersona();

  }

  public getPersona():void {
    this.personaService.getPersona().subscribe({
      next:(Response: Persona) =>{
      this.persona=Response;
      },

    error:(error:HttpErrorResponse) =>{
      alert(error.message);
    }
    })
  }
}