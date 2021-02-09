import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersModalWindowComponent } from './users-modal-window.component';

describe('UsersModalWindowComponent', () => {
  let component: UsersModalWindowComponent;
  let fixture: ComponentFixture<UsersModalWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersModalWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
