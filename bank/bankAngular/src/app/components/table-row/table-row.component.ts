import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/models/client';
import { ClientService } from 'src/services/client.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input() client?: Client;

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
  }

  modifyClient(id: number) {
      this.router.navigate(["/clients/" + id]);
  }

  deleteClient(client : Client): void {
    this.client = undefined;
    this.clientService.deleteClient(client.id).subscribe();
  }

}
