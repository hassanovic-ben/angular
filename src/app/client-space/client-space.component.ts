import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BookService} from "../book/books.service";
import {Book} from "../book/book";
import {Client} from "../client/client";
import {UserService} from "../admin/admin.service";

@Component({
  selector: 'app-client-space',
  templateUrl: './client-space.component.html',
})
export class ClientSpaceComponent implements OnInit {

  books:Book[]=Array();
  error: any;
  bookToBeBuy:Book;

  constructor(
    private router: Router,
    private bookService: BookService,
    private userService: UserService) { }


  getAvailableBook():void{
    this.bookService.getAvailableBooks().
           then(books => this.books = books)
          .catch(error => this.error = error);
  }


   goOut():void{
    this.userService.logOut();
    const link = ['login'];
    this.router.navigate(link);
  }

  buy():void{



  }


  ngOnInit() {
    this.getAvailableBook()
  }

}
