import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableManagersComponent } from './table-managers.component';

describe('TableManagersComponent', () => {
  let component: TableManagersComponent;
  let fixture: ComponentFixture<TableManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableManagersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
