import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../admin/admin.service';
import { Admin} from '../admin/admin';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent implements OnInit{

  error: any
  user: Admin
  login:string
  password:string

  constructor(
    private router: Router,
    private userService: UserService) { }




  onSubmit(): void {

    console.log(this.userService
      .getConnection(this.login,this.password)
    )
    this.userService
      .getConnection(this.login,this.password)
      .then(user => this.user = user)
      .catch(error => this.error = error);


  }

  handleErrors(error:Response) : string{
    return 'An error occured' + error.json()
  }

  ngOnInit(): void {

  }
  gotoSpaceAdmin(): void {
    const link = ['admin-space'];
    this.router.navigate(link);
  }

  gotoSpaceClient(): void {
    const link = ['client-space'];
    this.router.navigate(link);
  }

}
