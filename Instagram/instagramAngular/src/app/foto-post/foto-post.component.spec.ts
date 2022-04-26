import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoPostComponent } from './foto-post.component';

describe('FotoPostComponent', () => {
  let component: FotoPostComponent;
  let fixture: ComponentFixture<FotoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
