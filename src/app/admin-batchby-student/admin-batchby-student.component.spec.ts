import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBatchbyStudentComponent } from './admin-batchby-student.component';

describe('AdminBatchbyStudentComponent', () => {
  let component: AdminBatchbyStudentComponent;
  let fixture: ComponentFixture<AdminBatchbyStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBatchbyStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBatchbyStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
