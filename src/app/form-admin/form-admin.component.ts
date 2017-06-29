import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Admin} from "../admin/admin";
import {UserService} from "../admin/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent {

  @Input() admin:Admin
  error:any
  @Output() close = new EventEmitter()


  constructor(
    private adminService:UserService,
    private route: Router){}

  save(): void {
    this.adminService
      .save(this.admin)
      .then(admin => {
        this.admin = admin; // saved hero, w/ id if new
        this.goBack(admin);
      })
      .catch(error => this.error = error); // TODO: Display error message

    const link = ['books'];
    this.route.navigate(link);
  }

  ngOnInit(): void {
    this.admin = new Admin()
  }
  goBack(savedBook: Admin = null): void {
    this.close.emit(savedBook);

  }

}
