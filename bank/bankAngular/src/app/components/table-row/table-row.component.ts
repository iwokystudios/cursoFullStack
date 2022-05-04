import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/models/client';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input() client?: Client;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  deleteClient() {

  }

  modifyClient(id: number) {
      this.router.navigate(["/clients/" + id]);
  }

}
