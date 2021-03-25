import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchbyidComponent } from './batchbyid.component';

describe('BatchbyidComponent', () => {
  let component: BatchbyidComponent;
  let fixture: ComponentFixture<BatchbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
