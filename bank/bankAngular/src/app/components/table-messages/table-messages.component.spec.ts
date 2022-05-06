import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMessagesComponent } from './table-messages.component';

describe('TableMessagesComponent', () => {
  let component: TableMessagesComponent;
  let fixture: ComponentFixture<TableMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
