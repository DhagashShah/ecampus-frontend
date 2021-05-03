import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyGetbatchbyidComponent } from './faculty-getbatchbyid.component';

describe('FacultyGetbatchbyidComponent', () => {
  let component: FacultyGetbatchbyidComponent;
  let fixture: ComponentFixture<FacultyGetbatchbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyGetbatchbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyGetbatchbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
