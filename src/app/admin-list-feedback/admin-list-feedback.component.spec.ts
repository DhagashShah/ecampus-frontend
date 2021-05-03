import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListFeedbackComponent } from './admin-list-feedback.component';

describe('AdminListFeedbackComponent', () => {
  let component: AdminListFeedbackComponent;
  let fixture: ComponentFixture<AdminListFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
