import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAddTaskComponent } from './faculty-add-task.component';

describe('FacultyAddTaskComponent', () => {
  let component: FacultyAddTaskComponent;
  let fixture: ComponentFixture<FacultyAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAddTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
