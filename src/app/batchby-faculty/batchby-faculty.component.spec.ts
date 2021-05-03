import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchbyFacultyComponent } from './batchby-faculty.component';

describe('BatchbyFacultyComponent', () => {
  let component: BatchbyFacultyComponent;
  let fixture: ComponentFixture<BatchbyFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchbyFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchbyFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
