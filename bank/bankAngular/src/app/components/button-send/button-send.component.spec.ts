import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSendComponent } from './button-send.component';

describe('ButtonSendComponent', () => {
  let component: ButtonSendComponent;
  let fixture: ComponentFixture<ButtonSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
