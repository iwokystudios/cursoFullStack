import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorieComponent } from './historie.component';

describe('HistorieComponent', () => {
  let component: HistorieComponent;
  let fixture: ComponentFixture<HistorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
