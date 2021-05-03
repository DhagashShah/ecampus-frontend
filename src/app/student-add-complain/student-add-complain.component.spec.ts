import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddComplainComponent } from './student-add-complain.component';

describe('StudentAddComplainComponent', () => {
  let component: StudentAddComplainComponent;
  let fixture: ComponentFixture<StudentAddComplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAddComplainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
