import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuscriptsComponent } from './manuscripts.component';

describe('ManuscriptsComponent', () => {
  let component: ManuscriptsComponent;
  let fixture: ComponentFixture<ManuscriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuscriptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManuscriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
