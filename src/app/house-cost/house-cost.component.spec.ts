import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCostComponent } from './house-cost.component';

describe('HouseCostComponent', () => {
  let component: HouseCostComponent;
  let fixture: ComponentFixture<HouseCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
