import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Book} from "../book/book";
import {BookService} from "../book/books.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'my-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent  implements OnInit  {

   @Input() book:Book
   error:any
   @Output() close = new EventEmitter()


constructor(
  private bookService:BookService,
  private route: Router){}

  save(): void {
    this.bookService
      .save(this.book)
      .then(book => {
        this.book = book; // saved hero, w/ id if new
        this.goBack(book);
      })
      .catch(error => this.error = error); // TODO: Display error message

    const link = ['books'];
    this.route.navigate(link);
  }

  ngOnInit(): void {
    this.book = new Book()
  }
  goBack(savedBook: Book = null): void {
    this.close.emit(savedBook);

  }


}


