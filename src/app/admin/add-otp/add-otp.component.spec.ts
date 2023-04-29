import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtpComponent } from './add-otp.component';

describe('AddOtpComponent', () => {
  let component: AddOtpComponent;
  let fixture: ComponentFixture<AddOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
