import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowWiresComponent } from './table-row-wires.component';

describe('TableRowWiresComponent', () => {
  let component: TableRowWiresComponent;
  let fixture: ComponentFixture<TableRowWiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowWiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowWiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
