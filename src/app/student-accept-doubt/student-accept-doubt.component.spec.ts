import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAcceptDoubtComponent } from './student-accept-doubt.component';

describe('StudentAcceptDoubtComponent', () => {
  let component: StudentAcceptDoubtComponent;
  let fixture: ComponentFixture<StudentAcceptDoubtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAcceptDoubtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAcceptDoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
