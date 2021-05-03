import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTaskStudentsComponent } from './faculty-task-students.component';

describe('FacultyTaskStudentsComponent', () => {
  let component: FacultyTaskStudentsComponent;
  let fixture: ComponentFixture<FacultyTaskStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyTaskStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyTaskStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
