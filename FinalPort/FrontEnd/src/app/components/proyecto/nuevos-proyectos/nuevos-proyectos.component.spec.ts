import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosProyectosComponent } from './nuevos-proyectos.component';

describe('NuevosProyectosComponent', () => {
  let component: NuevosProyectosComponent;
  let fixture: ComponentFixture<NuevosProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevosProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevosProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
