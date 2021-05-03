import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAddNotesComponent } from './faculty-add-notes.component';

describe('FacultyAddNotesComponent', () => {
  let component: FacultyAddNotesComponent;
  let fixture: ComponentFixture<FacultyAddNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAddNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAddNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
