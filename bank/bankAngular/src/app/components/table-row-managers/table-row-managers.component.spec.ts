import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowManagersComponent } from './table-row-managers.component';

describe('TableRowManagersComponent', () => {
  let component: TableRowManagersComponent;
  let fixture: ComponentFixture<TableRowManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowManagersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
