import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BockedUsersComponent } from './bocked-users.component';

describe('BockedUsersComponent', () => {
  let component: BockedUsersComponent;
  let fixture: ComponentFixture<BockedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BockedUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BockedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
