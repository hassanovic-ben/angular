import {Injectable} from "@angular/core";

import {Http,Response,Headers} from "@angular/http";

import { User } from './user';

import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";



@Injectable()
export class UserService {

  /* private _bookUrl = 'http://localhost:8080/bookstore/admin/show-all-books';

   constructor(private _http: Http){}

   getBooks() : Observable<IBook[]>{
   return this._http.get(this._bookUrl)
   .map((response:Response)=> <IBook[]>response.json());
   }

   private handleError(error:Response){

   } */

  private userUrl = 'http://localhost:8080/bookstore/';  // URL to web api
  private deleteUrl = '/admin/delete-user';


  constructor(private http: Http) { }

  getUsers() : Observable<User[]>{
    return this.http
      .get(this.userUrl+"admin/show-users").map((response:Response)=> <User[]>response.json());
  }

  getConnection(login:string,password:string) : Observable<User>{
    return this.http.get(this.userUrl+"login/"+login+"/"+password).map((response:Response)=>response.json())
  }


  getUser(id: number): Promise<User> {
    /* return this.getBooks()
     .then(books => books.find(book => book.id === id));
     */
    return null;
  }

  save(user: User): Promise<User> {
    if (user.id) {
      return this.put(user);
    }
    return this.post(user);
  }

  delete(user: User): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.deleteUrl}/${user.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  private post(user: User): Promise<User> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.userUrl, JSON.stringify(user), {headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }


  // Update existing Hero
  private put(user: User): Promise<User> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.userUrl}/${user.id}`;

    return this.http
      .put(url, JSON.stringify(user), { headers: headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
