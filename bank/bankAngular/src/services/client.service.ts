import { Injectable } from '@angular/core';
import { CLIENTS } from 'src/mocks/mocks-clients';
import { Client } from 'src/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClient(id:number): any {
    const client = CLIENTS.filter(client => client.id == id)
    return client;
  };
  getClients(): Client[] {
    return CLIENTS;
  };
  // updateClient(id:number): void {};
  // deleteClient(id:number): void {};
  // insertClient(Client): void {};
  // insertClients(Client[]): void {};

}
