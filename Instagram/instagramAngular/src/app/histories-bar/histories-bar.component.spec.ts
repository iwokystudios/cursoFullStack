import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriesBarComponent } from './histories-bar.component';

describe('HistoriesBarComponent', () => {
  let component: HistoriesBarComponent;
  let fixture: ComponentFixture<HistoriesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriesBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
