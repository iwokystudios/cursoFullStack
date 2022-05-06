import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWiresComponent } from './table-wires.component';

describe('TableWiresComponent', () => {
  let component: TableWiresComponent;
  let fixture: ComponentFixture<TableWiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
