import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuscriptComponent } from './manuscript.component';

describe('ManuscriptComponent', () => {
  let component: ManuscriptComponent;
  let fixture: ComponentFixture<ManuscriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuscriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManuscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
