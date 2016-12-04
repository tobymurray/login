import { UserService } from './../shared/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'lgn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService) { }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }

  onLogIn() {
    this.userService.logIn('', '');
  }

  onLogOut() {
    this.userService.logOut();
  }

}
