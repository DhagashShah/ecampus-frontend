import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewNotesComponent } from './student-view-notes.component';

describe('StudentViewNotesComponent', () => {
  let component: StudentViewNotesComponent;
  let fixture: ComponentFixture<StudentViewNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
