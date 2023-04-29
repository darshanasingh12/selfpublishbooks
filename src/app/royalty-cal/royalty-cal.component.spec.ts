import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyaltyCalComponent } from './royalty-cal.component';

describe('RoyaltyCalComponent', () => {
  let component: RoyaltyCalComponent;
  let fixture: ComponentFixture<RoyaltyCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyaltyCalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoyaltyCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
