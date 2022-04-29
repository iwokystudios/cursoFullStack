import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/models/client';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input() client?: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
