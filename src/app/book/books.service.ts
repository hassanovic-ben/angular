import {Injectable} from "@angular/core";

/* import { IBook } from './book' */

import {Http,Response,Headers} from "@angular/http";

  import {Observable} from "rxjs";

import { Book } from './book';

/*  import 'rxjs/add/operator/map';  */

import 'rxjs/add/operator/toPromise';



/* import { Hero } from './hero'; */


@Injectable()
export class BookService {

    /* private _bookUrl = 'http://localhost:8080/bookstore/admin/show-all-books';

    constructor(private _http: Http){}

    getBooks() : Observable<IBook[]>{
        return this._http.get(this._bookUrl)
               .map((response:Response)=> <IBook[]>response.json());
    }
    private handleError(error:Response){

    }*/

  private booksUrl = 'http://localhost:8080/bookstore/admin/show-all-books';  // URL to web api

  constructor(private http: Http) { }

  getBooks(): Promise<Array<Book>> {
    return this.http
      .get(this.booksUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as Book[];
      })
      .catch(this.handleError);
  }



  getBook(id: number): Promise<Book> {
    return this.getBooks()
      .then(books => books.find(book => book.id === id));
  }

  save(book: Book): Promise<Book> {
    if (book.id) {
      return this.put(book);
    }
    return this.post(book);
  }

  delete(book: Book): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.booksUrl}/${book.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Hero
  private post(book: Book): Promise<Book> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.booksUrl, JSON.stringify(book), {headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing Hero
  private put(book: Book): Promise<Book> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.booksUrl}/${book.id}`;

    return this.http
      .put(url, JSON.stringify(book), { headers: headers })
      .toPromise()
      .then(() => book)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
