import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CLIENTS } from 'src/mocks/mocks-clients';
import { Client } from 'src/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClient(id:number): any {
    var client = CLIENTS.filter(client => client.id == id)
    const cliente = client[0];
    return cliente;
  };
  getClients(): Client[] {
    return CLIENTS;
  };
  // updateClient(id:number): void {};

  deleteClient(id:number): any {
    var client = CLIENTS.filter(client => client.id !== id)
    return client;
  };



  // insertClient(Client): void {};
  // insertClients(Client[]): void {};



}
