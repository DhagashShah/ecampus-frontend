import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyGetattendanceComponent } from './faculty-getattendance.component';

describe('FacultyGetattendanceComponent', () => {
  let component: FacultyGetattendanceComponent;
  let fixture: ComponentFixture<FacultyGetattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyGetattendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyGetattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
