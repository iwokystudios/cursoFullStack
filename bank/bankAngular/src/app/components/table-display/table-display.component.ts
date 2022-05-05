import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/models/client';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.scss']
})
export class TableDisplayComponent implements OnInit {

  @Input() clients?: Client[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newClient() {
    this.router.navigate(["/new-client"]);
  };
}
