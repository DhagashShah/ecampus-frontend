import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListDoubtComponent } from './student-list-doubt.component';

describe('StudentListDoubtComponent', () => {
  let component: StudentListDoubtComponent;
  let fixture: ComponentFixture<StudentListDoubtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListDoubtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListDoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
