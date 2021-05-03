import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyListBatchComponent } from './faculty-list-batch.component';

describe('FacultyListBatchComponent', () => {
  let component: FacultyListBatchComponent;
  let fixture: ComponentFixture<FacultyListBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyListBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyListBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
