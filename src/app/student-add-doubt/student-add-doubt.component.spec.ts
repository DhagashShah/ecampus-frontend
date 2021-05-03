import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddDoubtComponent } from './student-add-doubt.component';

describe('StudentAddDoubtComponent', () => {
  let component: StudentAddDoubtComponent;
  let fixture: ComponentFixture<StudentAddDoubtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAddDoubtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddDoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
