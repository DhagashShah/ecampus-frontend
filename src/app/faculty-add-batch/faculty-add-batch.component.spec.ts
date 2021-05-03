import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAddBatchComponent } from './faculty-add-batch.component';

describe('FacultyAddBatchComponent', () => {
  let component: FacultyAddBatchComponent;
  let fixture: ComponentFixture<FacultyAddBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAddBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAddBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
