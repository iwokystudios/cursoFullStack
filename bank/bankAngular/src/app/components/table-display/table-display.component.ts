import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/models/client';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.scss']
})
export class TableDisplayComponent implements OnInit {

  @Input() clients?: Client[];

  constructor() { }

  ngOnInit(): void {
  }

  newClient() {};
}
