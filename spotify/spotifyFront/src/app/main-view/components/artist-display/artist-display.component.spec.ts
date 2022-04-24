import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDisplayComponent } from './artist-display.component';

describe('ArtistDisplayComponent', () => {
  let component: ArtistDisplayComponent;
  let fixture: ComponentFixture<ArtistDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
