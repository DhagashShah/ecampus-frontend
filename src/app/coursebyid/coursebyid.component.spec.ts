import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursebyidComponent } from './coursebyid.component';

describe('CoursebyidComponent', () => {
  let component: CoursebyidComponent;
  let fixture: ComponentFixture<CoursebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursebyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
