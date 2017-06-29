import {Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import { Admin } from './admin';

import { UserService } from './admin.service';


@Component({
  selector:'app-user',
  templateUrl:'./user.component.html',
})

export class UserComponent implements OnInit{

  users: Admin[]= Array();
  selectedUser: Admin;
  error: any;

  constructor(
  private router: Router,
  private userService: UserService) { }

  getAdmins(): void {
    this.userService
      .getAdmins()
      .then(user => this.users = user)
      .catch(error => this.error = error);
  }


  deleteUser(user: Admin, event: any): void {
    event.stopPropagation();
    this.userService.delete(user)
      .then(res => {
        this.users = this.users.filter(u => u !== user);
        if (this.selectedUser === user) { this.selectedUser = null; }
      })
      .catch(error => this.error = error);
  }

  updateUser(user):void {
     // event.stopPropagation()
     console.log(user.name)


  }

  ngOnInit(): void {
    this.getAdmins();
  }


}
