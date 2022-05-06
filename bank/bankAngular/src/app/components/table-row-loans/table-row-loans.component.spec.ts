import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowLoansComponent } from './table-row-loans.component';

describe('TableRowLoansComponent', () => {
  let component: TableRowLoansComponent;
  let fixture: ComponentFixture<TableRowLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
