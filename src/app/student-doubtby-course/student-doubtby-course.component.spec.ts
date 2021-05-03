import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDoubtbyCourseComponent } from './student-doubtby-course.component';

describe('StudentDoubtbyCourseComponent', () => {
  let component: StudentDoubtbyCourseComponent;
  let fixture: ComponentFixture<StudentDoubtbyCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDoubtbyCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDoubtbyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
