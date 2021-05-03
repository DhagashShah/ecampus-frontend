import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAssignTaskComponent } from './faculty-assign-task.component';

describe('FacultyAssignTaskComponent', () => {
  let component: FacultyAssignTaskComponent;
  let fixture: ComponentFixture<FacultyAssignTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAssignTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAssignTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
