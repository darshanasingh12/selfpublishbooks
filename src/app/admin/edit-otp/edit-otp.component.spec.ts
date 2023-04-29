import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOtpComponent } from './edit-otp.component';

describe('EditOtpComponent', () => {
  let component: EditOtpComponent;
  let fixture: ComponentFixture<EditOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
