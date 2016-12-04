import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private loggedIn: boolean = false;

  constructor(private http: Http) { }

  logIn(email: string, password: string) {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
