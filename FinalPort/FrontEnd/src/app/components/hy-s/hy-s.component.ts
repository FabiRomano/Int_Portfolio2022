import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';


@Component({
  selector: 'app-hy-s',
  templateUrl: './hy-s.component.html',
  styleUrls: ['./hy-s.component.css']
})
export class HySComponent implements OnInit {
  public skills : Skills[] =[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
   this.getSkills()
  }
  public getSkills():void{
    this.skillsService.verSkills().subscribe({
      next: (response: Skills[]) => {
      this.skills=response;
    },
    error:(error: HttpErrorResponse)=>{
      alert (error.message);
    }
    });
  }
 
  }
