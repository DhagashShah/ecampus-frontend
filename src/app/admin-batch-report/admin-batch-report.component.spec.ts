import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBatchReportComponent } from './admin-batch-report.component';

describe('AdminBatchReportComponent', () => {
  let component: AdminBatchReportComponent;
  let fixture: ComponentFixture<AdminBatchReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBatchReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBatchReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
