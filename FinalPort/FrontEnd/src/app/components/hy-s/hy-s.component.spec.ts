import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HySComponent } from './hy-s.component';

describe('HySComponent', () => {
  let component: HySComponent;
  let fixture: ComponentFixture<HySComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HySComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HySComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
