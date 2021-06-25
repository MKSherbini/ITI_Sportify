import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionSliderComponent } from './prediction-slider.component';

describe('PredictionSliderComponent', () => {
  let component: PredictionSliderComponent;
  let fixture: ComponentFixture<PredictionSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
