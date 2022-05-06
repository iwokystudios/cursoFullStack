import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowClientComponent } from './table-row-client.component';

describe('TableRowClientComponent', () => {
  let component: TableRowClientComponent;
  let fixture: ComponentFixture<TableRowClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
