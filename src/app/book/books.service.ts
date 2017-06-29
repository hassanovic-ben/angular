import {Injectable} from "@angular/core";

import {Http,Response,Headers} from "@angular/http";

import { Book } from './book';


import 'rxjs/add/operator/toPromise';



@Injectable()
export class BookService {


  private booksUrl = 'http://localhost:8080/bookstore';  // URL to web api

  constructor(private http: Http) { }

  getBooks() :Promise<Book[]> {
    return this.http
      .get(this.booksUrl+"/admin/show-books")
      .toPromise()
      .then((response) => {
        return response.json() as Book[];
      })
      .catch(this.handleError);
  }


  getAvailableBooks() :Promise<Array<Book>> {
    return this.http
      .get(this.booksUrl+"/book/available-book")
      .toPromise()
      .then((response) => {
        return response.json() as Book[];
      })
      .catch(this.handleError);
  }

  getBook(id: number): Promise<Book> {
    return this.getBooks()
      .then(books => books.find(book => book.idBook === id));

  }

  save(book: Book): Promise<Book> {
    return this.post(book)
  }

  delete(book: Book): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.booksUrl}/admin/book/delete/${book.idBook}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }
  //buyBook(book:Book):

  // Add new Book
  private post(book: Book): Promise<Book> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    console.log(book.nameBook)
      console.log(this.booksUrl+"/admin/create-book")
    return this.http
      .post(this.booksUrl+"/admin/create-book", JSON.stringify(book), {headers: headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  // Update existing Hero
  private put(book: Book): Promise<Book> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.booksUrl}/${book.idBook}`;

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
