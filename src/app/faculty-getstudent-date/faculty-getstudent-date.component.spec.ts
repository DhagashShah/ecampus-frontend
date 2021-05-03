import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyGetstudentDateComponent } from './faculty-getstudent-date.component';

describe('FacultyGetstudentDateComponent', () => {
  let component: FacultyGetstudentDateComponent;
  let fixture: ComponentFixture<FacultyGetstudentDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyGetstudentDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyGetstudentDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
