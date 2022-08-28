import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';

import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-hy-s',
  templateUrl: './hy-s.component.html',
  styleUrls: ['./hy-s.component.css']
})
export class HySComponent implements OnInit {
  public skills: Skill []=[];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.getSkills
  }
  public getSkills():void{
    this.skillService.getSkill().subscribe({
      next: (response: Skill[]) =>{
        this.skills=response;
      },
      error:(error: HttpErrorResponse)=>{
        alert (error.message);
      }
            
    })
  }
}
