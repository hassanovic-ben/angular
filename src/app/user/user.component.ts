import {Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import { User } from './user';

import { UserService } from './user.service';


@Component({
  selector:'app-user',
  templateUrl:'./user.component.html',
})

export class UserComponent implements OnInit{


  users: User[]= Array();
  selectedUser: User;
  addingUser = false;
  error: any;
  showNgFor = false;

  constructor(
  private router: Router,
  private userService: UserService) { }


  getUsers(): void {
    /*
     this.bookService
     .getBooks().then(b=> {
     console.log(b)
     })
     .catch(error => this.error = error);
     */
    this.userService.getUsers().subscribe(c => {
      this.users = c;
    })

  }


  addUser(): void {
    this.addingUser = true;
    this.selectedUser = null;
  }

  close(savedUser: User): void {
    this.addingUser = false;
    if (savedUser) { this.getUsers(); }
  }

  deleteUser(user: User, event: any): void {
    event.stopPropagation();
    this.userService.delete(user)
      .then(res => {
        this.users = this.users.filter(u => u !== user);
        if (this.selectedUser === user) { this.selectedUser = null; }
      })
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    this.addingUser = false;
  }
}
