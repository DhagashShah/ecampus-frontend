import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeedbackBatchbyidComponent } from './admin-feedback-batchbyid.component';

describe('AdminFeedbackBatchbyidComponent', () => {
  let component: AdminFeedbackBatchbyidComponent;
  let fixture: ComponentFixture<AdminFeedbackBatchbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFeedbackBatchbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeedbackBatchbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
