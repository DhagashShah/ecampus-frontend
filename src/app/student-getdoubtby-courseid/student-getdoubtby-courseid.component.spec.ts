import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGetdoubtbyCourseidComponent } from './student-getdoubtby-courseid.component';

describe('StudentGetdoubtbyCourseidComponent', () => {
  let component: StudentGetdoubtbyCourseidComponent;
  let fixture: ComponentFixture<StudentGetdoubtbyCourseidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGetdoubtbyCourseidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGetdoubtbyCourseidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
