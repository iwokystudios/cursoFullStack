import { Component, OnInit, Output } from '@angular/core';
import { Client } from 'src/models/client';
import { ClientService } from 'src/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Output() clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clients = this.clientService.getClients();
  }

}
