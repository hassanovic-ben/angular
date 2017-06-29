import {Injectable} from "@angular/core";

import {Http,Response,Headers} from "@angular/http";

import { Client } from './client';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ClientService {

  /* private _bookUrl = 'http://localhost:8080/bookstore/admin/show-all-books';

   constructor(private _http: Http){}

   getBooks() : Observable<IBook[]>{
   return this._http.get(this._bookUrl)
   .map((response:Response)=> <IBook[]>response.json());
   }

   private handleError(error:Response){

   } */

  private clientUrl = 'http://localhost:8080/bookstore';  // URL to web api


  constructor(private http: Http) { }

  getClients() {
    return this.http
      .get(this.clientUrl+"/admin/getClient")
      .toPromise()
      .then((response) => {
        return response.json() as Client[];
      })
      .catch(this.handleError);
  }



  getClient(id: number): Promise<Client> {
    /* return this.getBooks()
     .then(books => books.find(book => book.id === id));
     */
    return null;
  }

  save(client: Client): Promise<Client> {
    return this.post(client);
  }

  delete(client: Client): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.clientUrl}/admin/delete-user/${client.idUser}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  private post(client: Client): Promise<Client> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.clientUrl+"/admin/create-client", JSON.stringify(client), {headers: headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  // Update existing Hero
  private put(client: Client): Promise<Client> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.clientUrl}/${client.idUser}`;

    return this.http
      .put(url, JSON.stringify(client), { headers: headers })
      .toPromise()
      .then(() => client)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
