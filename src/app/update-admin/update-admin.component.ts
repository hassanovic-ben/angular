import { Component, OnInit } from '@angular/core';
import {Admin} from "../admin/admin";
import {UserService} from "../admin/admin.service";


@Component({
  selector: 'my-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})


export class UpdateAdminComponent implements OnInit{
  admin: Admin;
  constructor(
    private adminService: UserService,

  ){  }

  ngOnInit(): void {

  }

  goUpdate(admin: Admin){
    this.adminService.put(admin)
  }

}
