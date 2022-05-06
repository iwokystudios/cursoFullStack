import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLoansComponent } from './table-loans.component';

describe('TableLoansComponent', () => {
  let component: TableLoansComponent;
  let fixture: ComponentFixture<TableLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
