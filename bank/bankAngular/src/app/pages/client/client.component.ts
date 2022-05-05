import { Location } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/models/client';
import { ClientService } from 'src/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  client?: Client;
  // client?: Observable<Client>;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private location: Location,
    ) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.client = this.clientService.getClient(id);
    console.log(this.client)
  }

  goBack(): void {
    this.location.back();
  }

  

}
