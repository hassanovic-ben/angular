import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../admin/admin.service";


@Component({
  selector:'admin-space',
  templateUrl:'./adminspace.component.html',
})
export class AdminSpaceComponent {

  constructor(
    private router: Router,
    private userService: UserService) { }

private goOut():void{
  this.userService.logOut();
  console.log('cococ')
  const link = ['login'];
  this.router.navigate(link);
}
}
