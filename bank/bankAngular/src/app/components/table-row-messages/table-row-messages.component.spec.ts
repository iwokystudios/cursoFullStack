import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowMessagesComponent } from './table-row-messages.component';

describe('TableRowMessagesComponent', () => {
  let component: TableRowMessagesComponent;
  let fixture: ComponentFixture<TableRowMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
