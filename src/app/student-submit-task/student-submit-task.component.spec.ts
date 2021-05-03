import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubmitTaskComponent } from './student-submit-task.component';

describe('StudentSubmitTaskComponent', () => {
  let component: StudentSubmitTaskComponent;
  let fixture: ComponentFixture<StudentSubmitTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSubmitTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSubmitTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
