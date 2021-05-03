import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListFeedbackComponent } from './student-list-feedback.component';

describe('StudentListFeedbackComponent', () => {
  let component: StudentListFeedbackComponent;
  let fixture: ComponentFixture<StudentListFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
