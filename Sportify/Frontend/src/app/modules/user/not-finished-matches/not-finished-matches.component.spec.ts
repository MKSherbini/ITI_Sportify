import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFinishedMatchesComponent } from './not-finished-matches.component';

describe('NotFinishedMatchesComponent', () => {
  let component: NotFinishedMatchesComponent;
  let fixture: ComponentFixture<NotFinishedMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFinishedMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFinishedMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
