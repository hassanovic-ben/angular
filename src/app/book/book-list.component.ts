import {Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import { Book } from './book';

import { BookService } from './books.service';


@Component({
    selector:'available-books',
    templateUrl:'./book-list.component.html',
})

export class BookComponent implements OnInit{

/*
    constructor (private _bookService : BookService){

    }
    bookTitle : string = 'List of all available book ';

    books : Book[];

    ngOnInit() : void {
      this._bookService.getBooks().subscribe(books=>this.books=books);
    }*/

  books: Book[];
  selectedBook: Book;
  addingBook = false;
  error: any;
  showNgFor = false;

  constructor(
    private router: Router,
    private bookService: BookService) { }

  getBooks(): void {
    this.bookService
      .getBooks().then(books => this.books = books)
      .catch(error => this.error = error);
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
    event.stopPropagation();
    this.bookService.delete(book)
      .then(res => {
        this.books = this.books.filter(b => b !== book);
        if (this.selectedBook === book) { this.selectedBook = null; }
      })
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
    this.addingBook = false;
  }


}
