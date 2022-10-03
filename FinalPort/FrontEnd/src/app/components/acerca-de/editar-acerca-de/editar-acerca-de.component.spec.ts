import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAcercaDeComponent } from './editar-acerca-de.component';

describe('EditarAcercaDeComponent', () => {
  let component: EditarAcercaDeComponent;
  let fixture: ComponentFixture<EditarAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAcercaDeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
