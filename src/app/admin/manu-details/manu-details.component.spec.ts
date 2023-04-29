import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuDetailsComponent } from './manu-details.component';

describe('ManuDetailsComponent', () => {
  let component: ManuDetailsComponent;
  let fixture: ComponentFixture<ManuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
