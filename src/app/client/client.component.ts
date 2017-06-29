import {Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import { Client } from './client';

import { ClientService } from './client.service';
import {UserService} from "../admin/admin.service";


@Component({
  selector:'app-client',
  templateUrl:'./client.component.html',
})

export class ClientComponent implements OnInit{


  clients: Client[]= Array();
  selectedClient: Client;
  addingClient = false;
  error: any;
  showNgFor = false;

  constructor(
    private router: Router,
    private clientService: ClientService
  ) { }


  getClients(): void {

    this.clientService

      .getClients()
      .then(clients => this.clients = clients)
      .catch(error => this.error = error);

  }

  addBook(): void {
    this.addingClient = true;
    this.selectedClient = null;
  }

  close(savedClient: Client): void {
    this.addingClient = false;
    if (savedClient) { this.getClients(); }
  }

  deleteClient(client: Client, event: any): void {
    event.stopPropagation();
    this.clientService.delete(client)
      .then(res => {
        this.clients = this.clients.filter(c => c !== client);
        if (this.selectedClient === client) { this.selectedClient = null; }
      })
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getClients();
  }

  onSelect(client: Client): void {
    this.selectedClient = client;
    this.addingClient = false;
  }
}
