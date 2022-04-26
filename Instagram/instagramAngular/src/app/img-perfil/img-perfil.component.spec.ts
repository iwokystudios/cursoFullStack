import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPerfilComponent } from './img-perfil.component';

describe('ImgPerfilComponent', () => {
  let component: ImgPerfilComponent;
  let fixture: ComponentFixture<ImgPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
