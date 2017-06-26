import {Component, OnInit, Output} from "@angular/core";
import { Router } from '@angular/router';
import { Book } from './book';

import { BookService } from './books.service';
import {Response} from "@angular/http";


@Component({
    selector:'my-books',
    templateUrl:'./book-list.component.html',
})

export class BookComponent implements OnInit{


  books: Book[]= Array();
  selectedBook: Book;
  addingBook = false;
  error: any;
  showNgFor = false;

  constructor(
    private router: Router,
    private bookService: BookService) { }


  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books=>this.books=books)
  }

  addBook(): void {
    this.addingBook = true;
    this.selectedBook = null;
  }

  close(savedBook: Book): void {
    this.addingBook = false;
    if (savedBook) { this.getBooks(); }
  }

  deleteBook(book: Book, event: any): void {
    this.bookService.delete(book)
      .subscribe(res => this.books = this.books.filter(b => b !== book),error=> this.error=this.handleErrors(error))

  }

  ngOnInit(): void {
    //this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
    this.addingBook = false;
  }

  handleErrors(error:Response) : string{
    return 'An error occured' + error.json().message
  }

}
