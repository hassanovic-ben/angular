import {Injectable} from "@angular/core";
import {Http,Response,Headers} from "@angular/http";
import { Admin } from './admin';
import 'rxjs/add/operator/toPromise';
import {Client} from "../client/client";
import {Book} from "../book/book";

@Injectable()
export class UserService {


  private userUrl = 'http://localhost:8080/bookstore/';  // URL to web api


  constructor(private http: Http) { }

  getUsers() :  Promise<Array<Admin>> {
    return this.http
      .get(this.userUrl+"admin/get-users")
      .toPromise()
      .then((response) => {
        return response.json() as Admin[];
      })
      .catch(this.handleError);
  }

  getBestClient() :  Promise<Client> {
    return this.http
      .get(this.userUrl+"/admin/bestClient")
      .toPromise()
      .then((response) => {
        return response.json() as Client;
      })
      .catch(this.handleError);
  }



  getBestBook() :  Promise<Book> {
    return this.http
      .get(this.userUrl+"/admin/bestBook")
      .toPromise()
      .then((response) => {
        return response.json() as Book;
      })
      .catch(this.handleError);

  }
  getTotalBook() :  Promise<number> {
    return this.http
      .get(this.userUrl+"/admin/totalBookSold")
      .toPromise()
      .then((response) => {
        return response.json() as number;
      })
      .catch(this.handleError);
  }

  getConnection(login:string,password:string): Promise<Admin> {

    return this.getUsers()
      .then(user => user.find(user => user.userName === login,user => user.password === password));
  /*  return this.http.get(this.userUrl+"login/"+login+"/"+password)
                    .toPromise().then((response) => {
                     return response.json() as Admin});*/
  }

  getAdmins() :  Promise<Array<Admin>> {
    return this.http
      .get(this.userUrl+"admin/getAdmin")
      .toPromise()
      .then((response) => {
        return response.json() as Admin[];
      })
      .catch(this.handleError);

  }


  getUser(id: number): Promise<Admin> {
    /* return this.getBooks()
     .then(books => books.find(book => book.id === id));
     */
    return null;
  }

  save(user: Admin): Promise<Admin> {
    return this.post(user);
  }

  delete(user: Admin): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.userUrl}/admin/delete-user/${user.idUser}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  private post(user: Admin): Promise<Admin> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.userUrl+"/admin/create-admin", JSON.stringify(user), {headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

   put(user: Admin): Promise<Admin> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.userUrl}/${user.idUser}`;

    return this.http
      .put(url, JSON.stringify(user), { headers:headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

   logOut(): void {
    this.http.get(this.userUrl+"logout")
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
