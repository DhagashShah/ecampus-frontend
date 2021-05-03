import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAttendanceDateComponent } from './faculty-attendance-date.component';

describe('FacultyAttendanceDateComponent', () => {
  let component: FacultyAttendanceDateComponent;
  let fixture: ComponentFixture<FacultyAttendanceDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAttendanceDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAttendanceDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
