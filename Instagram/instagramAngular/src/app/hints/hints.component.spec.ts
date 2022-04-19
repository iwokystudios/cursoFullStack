import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintsComponent } from './hints.component';

describe('HintsComponent', () => {
  let component: HintsComponent;
  let fixture: ComponentFixture<HintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
