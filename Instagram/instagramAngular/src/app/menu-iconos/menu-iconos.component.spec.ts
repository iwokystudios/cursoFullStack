import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIconosComponent } from './menu-iconos.component';

describe('MenuIconosComponent', () => {
  let component: MenuIconosComponent;
  let fixture: ComponentFixture<MenuIconosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuIconosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIconosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
