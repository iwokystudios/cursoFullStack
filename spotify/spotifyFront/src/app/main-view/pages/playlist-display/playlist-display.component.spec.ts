import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDisplayComponent } from './playlist-display.component';

describe('PlaylistDisplayComponent', () => {
  let component: PlaylistDisplayComponent;
  let fixture: ComponentFixture<PlaylistDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
