import {Component} from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-form',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css'],

  }
)
export class WelcomeComponent {

  constructor(private router:Router){

  }

  TitleConnexion:string = "Welcome to the book store";

  loginUser(event){
    console.log(event);
    var username = event.target.element[0].value();
    var password = event.target.element[1].value();
    console.log(username,password);
    if(username == 'admin' && password =='admin'){

      this.router.navigate(['dashbord']);
    }
    return false;

  }

}
