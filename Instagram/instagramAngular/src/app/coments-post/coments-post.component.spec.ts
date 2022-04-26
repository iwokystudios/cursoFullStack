import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentsPostComponent } from './coments-post.component';

describe('ComentsPostComponent', () => {
  let component: ComentsPostComponent;
  let fixture: ComponentFixture<ComentsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentsPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
