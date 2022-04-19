import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingBarComponent } from './playing-bar.component';

describe('PlayingBarComponent', () => {
  let component: PlayingBarComponent;
  let fixture: ComponentFixture<PlayingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
