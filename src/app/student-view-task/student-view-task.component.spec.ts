import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewTaskComponent } from './student-view-task.component';

describe('StudentViewTaskComponent', () => {
  let component: StudentViewTaskComponent;
  let fixture: ComponentFixture<StudentViewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
