import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Client} from "../client/client";
import {ClientService} from "../client/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent  {



  @Input() client:Client
  error:any
  @Output() close = new EventEmitter()


  constructor(
    private clientService:ClientService,
    private route: Router){}

  save(): void {

    this.clientService
      .save(this.client)
      .then(client => {
        this.client = client; // saved hero, w/ id if new
        this.goBack(client);
      })
      .catch(error => this.error = error); // TODO: Display error message

    console.log('cococo')

    const link = ['clients'];
    this.route.navigate(link);
  }

  ngOnInit(): void {
    this.client = new Client()
  }
  goBack(savedClient: Client = null): void {
    this.close.emit(savedClient);

  }



}
