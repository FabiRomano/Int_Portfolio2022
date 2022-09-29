import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaHysComponent } from './nueva-hys.component';

describe('NuevaHysComponent', () => {
  let component: NuevaHysComponent;
  let fixture: ComponentFixture<NuevaHysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaHysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaHysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
