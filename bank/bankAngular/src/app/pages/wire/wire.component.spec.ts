import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WireComponent } from './wire.component';

describe('WireComponent', () => {
  let component: WireComponent;
  let fixture: ComponentFixture<WireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
