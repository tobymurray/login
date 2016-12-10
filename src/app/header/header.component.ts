import { Component, OnInit } from '@angular/core';

import { UserService } from './../shared/user.service';

@Component({
  selector: 'lgn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }

  logInText() {
    return this.isLoggedIn() ? "Log out" : "Log in";
  }
}
